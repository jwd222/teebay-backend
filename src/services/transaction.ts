import { prismaClient } from '../lib/db'
import { TransactionStatus } from '@prisma/client'

export interface CreateTransactionPayload {
  productId: string
  fromUserId: string
  toUserId: string
  transactionStatus: TransactionStatus
}

export interface GetTransactionFromProductId {
  productId: string
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

  public static getTransactionFromProductId(
    payload: GetTransactionFromProductId
  ) {
    const { productId } = payload
    return prismaClient.transaction.findFirstOrThrow({
      where: {
        productId,
      },
    })
  }
}

export default TransactionService
