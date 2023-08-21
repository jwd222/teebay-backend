import { prismaClient } from '../lib/db'

export interface CreateProductPayload {
  title: string
  category: string
  description: string
  buyPrice: number
  rentPrice: number
  ownerId: string
}

export interface GetProductFromTitle {
  title: string
}

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
}

export default ProductService
