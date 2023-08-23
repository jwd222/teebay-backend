import TransactionService, {
  CreateTransactionPayload,
} from '../../services/transaction'

const queries = {}

const mutations = {
  createTransaction: async (_: any, payload: CreateTransactionPayload) => {
    const res = await TransactionService.createTransaction(payload)
    return res.id
  },
}

export const resolvers = { queries, mutations }
