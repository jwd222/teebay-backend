import { ApolloServer } from '@apollo/server'
import { User } from './user'
import { Product } from './product'

async function createApolloGraphqlServer() {
  const gqlServer = new ApolloServer({
    typeDefs: `
        ${User.typeDefs}
        ${Product.typeDefs}
        type Query {
            ${User.queries}
            ${Product.queries}
        }
        type Mutation {
            ${User.mutations}
            ${Product.mutations}
        }
    `, // Schema
    resolvers: {
      // Product: {
      //   owner: async (product) => {
      //     console.log(product)

      //     const { ownerId } = product
      //     const res = await prismaClient.user.findFirstOrThrow({
      //       where: {
      //         id: ownerId,
      //       },
      //     })
      //     return res
      //   },
      // },
      ...User.resolvers.other,
      Query: {
        ...User.resolvers.queries,
        ...Product.resolvers.queries,
      },
      Mutation: {
        ...User.resolvers.mutations,
        ...Product.resolvers.mutations,
      },
    },
  })

  // Start the gql server
  await gqlServer.start()

  return gqlServer
}

export default createApolloGraphqlServer
