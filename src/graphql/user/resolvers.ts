import UserService, {
  CreateUserPayload,
  GetUserPayload,
} from '../../services/user'

const queries = {
  getUser: async (_: any, payload: GetUserPayload) => {
    const res = await UserService.getUser(payload)
    return res
  },
  getAllUsers: async (_: any) => {
    const res = await UserService.getAllUsers()
    return res
  },
}

const mutations = {
  createUser: async (_: any, payload: CreateUserPayload) => {
    const res = await UserService.createUser(payload)
    return res
  },
}

export const resolvers = { queries, mutations }
