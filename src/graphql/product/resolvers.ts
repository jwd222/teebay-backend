import ProductService, { CreateProductPayload } from '../../services/product'

const queries = {
  getProducts: async (_: any, {}: {}) => {
    const res = await ProductService.getProducts()
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
