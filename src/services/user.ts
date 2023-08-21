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
  email: string
  // password: string
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
    const { email } = payload
    return prismaClient.user.findFirst({
      where: {
        email,
      },
    })
  }
}

export default UserService
