export const typeDefs = `#graphql
    type Product {
        id: ID!
        title: String!
        category: String
        description: String! 
        buyPrice: Float!
        rentPrice: Float!
        ownerId: String
        owner: User
    }
`
