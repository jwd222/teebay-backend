import ProductService, {
  CreateProductPayload,
  GetProductFromTitle,
  // GetProductFromUserId,
} from '../../services/product'

// const other = {
//   User: {
//     ownedProduct: async (payload: GetProductFromUserId) => {
//       const res = await ProductService.getProductFromUserId(payload)
//       return res
//     },
//   },
// }

const queries = {
  getProducts: async (_: any) => {
    const res = await ProductService.getProducts()
    return res
  },
  getProductFromTitle: async (_: any, payload: GetProductFromTitle) => {
    const res = await ProductService.getProductFromTitle(payload)
    return res
  },
}

const mutations = {
  createProduct: async (_: any, payload: CreateProductPayload) => {
    const res = await ProductService.createProduct(payload)
    return res.id
  },
}

export const resolvers = { queries, mutations }
