/*
  Warnings:

  - Changed the type of `buy_price` on the `products` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `rent_price` on the `products` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "products" DROP COLUMN "buy_price",
ADD COLUMN     "buy_price" INTEGER NOT NULL,
DROP COLUMN "rent_price",
ADD COLUMN     "rent_price" INTEGER NOT NULL;
