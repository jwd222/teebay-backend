export const mutations = `#graphql
    createUser(
        firstName: String!, 
        lastName: String, 
        email: String!, 
        password: String!,
        address: String!,
        phoneNumber: String!
    ): String
`
