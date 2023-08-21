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

export interface GetUserPayload {
  id: string
}

export interface GetUserForProductPayload {
  ownerId: string
}

class UserService {
  public static createUser(payload: CreateUserPayload) {
    const { firstName, lastName, email, password, address, phoneNumber } =
      payload

    const salt = randomBytes(32).toString('hex')
    const hashedPassword = createHmac('sha256', salt)
      .update(password)
      .digest('hex')

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

  public static getUserForProduct(payload: GetUserForProductPayload) {
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
