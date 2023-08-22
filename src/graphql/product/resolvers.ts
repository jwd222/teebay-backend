import ProductService, {
  CreateProductPayload,
  DeleteProductPayload,
  EditProductPayload,
  GetProductFromTitle,
  GetProductsFromId,
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
  getAllProducts: async (_: any) => {
    const res = await ProductService.getAllProducts()
    return res
  },
  getProductFromTitle: async (_: any, payload: GetProductFromTitle) => {
    const res = await ProductService.getProductFromTitle(payload)
    return res
  },
  getProductsFromId: async (_: any, payload: GetProductsFromId) => {
    const res = await ProductService.getProductsFromId(payload)
    return res
  },
}

const mutations = {
  createProduct: async (_: any, payload: CreateProductPayload) => {
    const res = await ProductService.createProduct(payload)
    return res.id
  },
  editProduct: async (_: any, payload: EditProductPayload) => {
    const res = await ProductService.editProduct(payload)
    return res.id
  },
  deleteProduct: async (_: any, payload: DeleteProductPayload) => {
    await ProductService.deleteProduct(payload)
    return 'product deleted!'
  },
}

export const resolvers = { queries, mutations }
