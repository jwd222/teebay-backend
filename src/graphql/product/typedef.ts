export const typeDefs = `#graphql
    type Product {
        id: ID!
        title: String!
        category: String!
        description: String! 
        buyPrice: Float!
        rentPrice: Float!
        rentTime: String!
        ownerId: String!
        owner: User!
        createdAt: String!
    }
`
