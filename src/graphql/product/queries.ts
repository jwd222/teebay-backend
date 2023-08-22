export const queries = `#graphql
    getAllProducts: [Product]
    getProductsFromId(ownerId: ID): [Product]
    getProductFromTitle(title: String!): Product
`
