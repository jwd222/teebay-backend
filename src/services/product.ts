import { prismaClient } from '../lib/db'
// import { GetUserPayload } from './user'

export interface CreateProductPayload {
  title: string
  category: string
  description: string
  buyPrice: number
  rentPrice: number
  rentTime: string
  ownerId: string
}
export interface EditProductPayload {
  id: string
  title: string
  category: string
  description: string
  buyPrice: number
  rentPrice: number
  rentTime: string
}

export interface GetProductFromTitle {
  title: string
}
export interface GetProductsFromId {
  ownerId: string
}

export interface DeleteProductPayload {
  id: string
}

// export interface GetProductFromUserId {
//   ownedProduct: string
// }

class ProductService {
  public static createProduct(payload: CreateProductPayload) {
    const {
      title,
      category,
      description,
      buyPrice,
      rentPrice,
      rentTime,
      ownerId,
    } = payload
    return prismaClient.product.create({
      data: {
        title,
        category,
        description,
        buyPrice,
        rentPrice,
        rentTime,
        ownerId,
      },
    })
  }

  public static editProduct(payload: EditProductPayload) {
    const { id, title, category, description, buyPrice, rentPrice, rentTime } =
      payload
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
        rentTime,
      },
    })
  }

  public static getAllProducts() {
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

  public static deleteProduct(payload: DeleteProductPayload) {
    const { id } = payload
    return prismaClient.product.delete({
      where: {
        id,
      },
    })
  }
}

export default ProductService
