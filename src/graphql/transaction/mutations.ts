export const mutations = `#graphql
    createTransaction(
        productId: ID!,
        fromUserId: ID!
        toUserId: ID!,
        transactionStatus: String!,
    ): String
`
