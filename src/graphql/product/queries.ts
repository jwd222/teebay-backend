export const queries = `#graphql
    getProducts: [Product]
    getProductsFromId(ownerId: ID): [Product]
    getProductFromTitle(title: String!): Product
`
