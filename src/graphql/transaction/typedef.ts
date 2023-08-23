export const typeDefs = `#graphql
    type Transaction {
        id: ID!
        productId: ID!
        fromUserId: ID!
        toUserId: ID!
        transactionStatus: TransactionStatus!
        amount: Float
        createdAt: String!
    }

    enum TransactionStatus {
        RENTING,
        SELLING
    } 
`
