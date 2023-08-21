export const mutations = `#graphql
    createUser(
        id: String!
        firstName: String!, 
        lastName: String, 
        email: String!, 
        password: String!,
        address: String!,
        phoneNumber: String!
    ): User
`
