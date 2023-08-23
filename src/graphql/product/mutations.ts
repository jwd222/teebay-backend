export const mutations = `#graphql
    createProduct(
        title: String!, 
        category: String!, 
        description: String!, 
        buyPrice: Float!, 
        rentPrice: Float!
        rentTime: String!
        ownerId: ID!
    ): String

    editProduct(
        id: ID!,
        title: String!, 
        category: String!, 
        description: String!, 
        buyPrice: Float!, 
        rentPrice: Float!
        rentTime: String!
    ): String

    deleteProduct(
        id:ID!
    ): String
`
