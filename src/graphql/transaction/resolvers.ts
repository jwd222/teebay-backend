import TransactionService, {
  CreateTransactionPayload,
  GetTransactionFromProductId,
} from '../../services/transaction'

const queries = {
  getTransactionFromProductId: async (
    _: any,
    payload: GetTransactionFromProductId
  ) => {
    const res = await TransactionService.getTransactionFromProductId(payload)
    return res
  },
}

const mutations = {
  createTransaction: async (_: any, payload: CreateTransactionPayload) => {
    const res = await TransactionService.createTransaction(payload)
    return res.id
  },
}

export const resolvers = { queries, mutations }
