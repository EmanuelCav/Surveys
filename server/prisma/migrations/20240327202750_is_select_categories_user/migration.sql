/*
  Warnings:

  - You are about to drop the column `isSelect` on the `Category` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Follow_followerId_followingId_key";

-- AlterTable
ALTER TABLE "Category" DROP COLUMN "isSelect";
