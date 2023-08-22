import UserService, {
  CheckUserPayload,
  CreateUserPayload,
  GetUserForProductPayload,
  GetUserPayload,
} from '../../services/user'

const other = {
  Product: {
    owner: async (payload: GetUserForProductPayload) => {
      const res = await UserService.getUserForProduct(payload)
      return res
    },
  },
}

const queries = {
  getUser: async (_: any, payload: GetUserPayload) => {
    const res = await UserService.getUser(payload)
    return res
  },
  getAllUsers: async (_: any) => {
    const res = await UserService.getAllUsers()
    return res
  },
  getUserId: async (_: any, payload: CheckUserPayload) => {
    const id = await UserService.getUserId(payload)
    return id
  },
  // getProductsFromUserId: async (_: any, payload: GetUserPayload) => {
  //   const res = await UserService.getProductsFromUserId(payload)
  //   return res
  // },
}

const mutations = {
  createUser: async (_: any, payload: CreateUserPayload) => {
    await UserService.createUser(payload)
    return 'user created'
  },
}

export const resolvers = { other, queries, mutations }
