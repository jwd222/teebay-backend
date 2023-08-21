import { prismaClient } from '../lib/db'

export interface CreateProductPayload {
  title: string
  category: string
  description: string
  buyPrice: number
  rentPrice: number
}

class ProductService {
  public static createProduct(payload: CreateProductPayload) {
    const { title, category, description, buyPrice, rentPrice } = payload
    return prismaClient.product.create({
      data: {
        title,
        category,
        description,
        buyPrice,
        rentPrice,
      },
    })
  }
}

export default ProductService
