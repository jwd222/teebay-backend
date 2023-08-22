export const queries = `#graphql
    getUser(id: ID!): User
    getAllUsers:[User]
    getUserId(
        email: String!, 
        password: String!,
    ): String
`
