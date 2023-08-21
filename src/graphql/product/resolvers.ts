import ProductService, {
  CreateProductPayload,
  GetProductFromTitle,
} from '../../services/product'

const queries = {
  getProducts: async (_: any, {}: {}) => {
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
