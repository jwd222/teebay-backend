export const mutations = `#graphql
    createProduct(
        title: String!, 
        category: String!, 
        description: String!, 
        buyPrice: Float!, 
        rentPrice: Float!
        ownerId: ID!
    ): String
`
