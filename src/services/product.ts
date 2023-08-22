import { prismaClient } from '../lib/db'
// import { GetUserPayload } from './user'

export interface CreateProductPayload {
  title: string
  category: string
  description: string
  buyPrice: number
  rentPrice: number
  ownerId: string
}
export interface EditProductPayload {
  id: string
  title: string
  category: string
  description: string
  buyPrice: number
  rentPrice: number
}

export interface GetProductFromTitle {
  title: string
}
export interface GetProductsFromId {
  ownerId: string
}

// export interface GetProductFromUserId {
//   ownedProduct: string
// }

class ProductService {
  public static createProduct(payload: CreateProductPayload) {
    const { title, category, description, buyPrice, rentPrice, ownerId } =
      payload
    return prismaClient.product.create({
      data: {
        title,
        category,
        description,
        buyPrice,
        rentPrice,
        ownerId,
      },
    })
  }

  public static editProduct(payload: EditProductPayload) {
    const { id, title, category, description, buyPrice, rentPrice } = payload
    return prismaClient.product.update({
      where: {
        id: id,
      },
      data: {
        title,
        category,
        description,
        buyPrice,
        rentPrice,
      },
    })
  }

  public static getProducts() {
    return prismaClient.product.findMany()
  }

  public static getProductFromTitle(payload: GetProductFromTitle) {
    const { title } = payload
    return prismaClient.product.findFirst({
      where: {
        title,
      },
    })
  }
  public static getProductsFromId(payload: GetProductsFromId) {
    const { ownerId } = payload
    return prismaClient.product.findMany({
      where: {
        ownerId,
      },
    })
  }

  // public static getProductFromUserId(payload: GetProductFromUserId) {
  //   const { ownedProduct } = payload
  //   return prismaClient.product.findFirst({
  //     where: {
  //       id: ownedProduct,
  //     },
  //   })
  // }
}

export default ProductService
