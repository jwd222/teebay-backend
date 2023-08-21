export const mutations = `#graphql
    createProduct(
        id: String!
        title: String!, 
        category: String!, 
        description: String!, 
        buyPrice: Float!, 
        rentPrice: Float!
    ): String
`
