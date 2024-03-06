/*
  Warnings:

  - A unique constraint covering the columns `[category]` on the table `Category` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Category" ADD COLUMN     "iconCategory" TEXT,
ADD COLUMN     "isSelect" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "status" SET DEFAULT false;

-- CreateIndex
CREATE UNIQUE INDEX "Category_category_key" ON "Category"("category");
