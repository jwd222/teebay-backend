import { prismaClient } from '../lib/db'
import { TransactionStatus } from '@prisma/client'

export interface CreateTransactionPayload {
  productId: string
  fromUserId: string
  toUserId: string
  transactionStatus: TransactionStatus
}

class TransactionService {
  public static createTransaction(payload: CreateTransactionPayload) {
    const { productId, fromUserId, toUserId, transactionStatus } = payload
    return prismaClient.transaction.create({
      data: {
        productId,
        fromUserId,
        toUserId,
        transactionStatus: transactionStatus,
      },
    })
  }
}

export default TransactionService
