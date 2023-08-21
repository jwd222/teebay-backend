import { createHmac, randomBytes } from 'node:crypto'
import { prismaClient } from '../lib/db'

export interface CreateUserPayload {
  firstName: string
  lastName?: string
  email: string
  password: string
  address: string
  phoneNumber: string
}

export interface CheckUserPayload {
  email: string
  password: string
}

export interface GetUserPayload {
  id: string
}

export interface GetUserForProductPayload {
  ownerId: string
}

class UserService {
  private static generateHash(salt: string, password: string) {
    return createHmac('sha256', salt).update(password).digest('hex')
  }
  public static createUser(payload: CreateUserPayload) {
    const salt = randomBytes(32).toString('hex')
    const { firstName, lastName, email, password, address, phoneNumber } =
      payload
    const hashedPassword = this.generateHash(salt, password)

    return prismaClient.user.create({
      data: {
        firstName,
        lastName,
        email,
        salt,
        password: hashedPassword,
        address,
        phoneNumber,
      },
    })
  }

  public static getUser(payload: GetUserPayload) {
    const { id } = payload
    return prismaClient.user.findFirst({
      where: {
        id,
      },
    })
  }

  private static getSalt(email: string) {
    return prismaClient.user.findUnique({ where: { email } })
  }

  public static async getUserId(payload: CheckUserPayload) {
    const { email, password } = payload
    const user = await UserService.getSalt(email)
    if (!user) throw new Error('user not found')

    const userSalt = user.salt
    const usersHashedPassword = this.generateHash(userSalt, password)
    if (usersHashedPassword !== user.password)
      throw new Error('incorrect password')

    return user.id
  }

  public static getUserForProduct(payload: GetUserForProductPayload) {
    // console.log(payload)
    const { ownerId } = payload
    return prismaClient.user.findFirstOrThrow({
      where: {
        id: ownerId,
      },
    })
  }

  public static getAllUsers() {
    return prismaClient.user.findMany()
  }
}

export default UserService
