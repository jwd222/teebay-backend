/*
  Warnings:

  - You are about to drop the column `buyer_id` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `creator_id` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `seller_id` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `address` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `phone_numeber` on the `users` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "products" DROP CONSTRAINT "products_buyer_id_fkey";

-- DropForeignKey
ALTER TABLE "products" DROP CONSTRAINT "products_creator_id_fkey";

-- DropForeignKey
ALTER TABLE "products" DROP CONSTRAINT "products_seller_id_fkey";

-- AlterTable
ALTER TABLE "products" DROP COLUMN "buyer_id",
DROP COLUMN "creator_id",
DROP COLUMN "seller_id";

-- AlterTable
ALTER TABLE "users" DROP COLUMN "address",
DROP COLUMN "phone_numeber";
