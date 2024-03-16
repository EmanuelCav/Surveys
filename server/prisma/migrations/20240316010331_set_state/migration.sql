/*
  Warnings:

  - Made the column `surveyId` on table `Option` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `state` to the `Survey` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "State" AS ENUM ('PUBLIC', 'PRIVATE');

-- DropForeignKey
ALTER TABLE "Option" DROP CONSTRAINT "Option_surveyId_fkey";

-- AlterTable
ALTER TABLE "Option" ALTER COLUMN "surveyId" SET NOT NULL;

-- AlterTable
ALTER TABLE "Survey" ADD COLUMN     "state" "State" NOT NULL;

-- AddForeignKey
ALTER TABLE "Option" ADD CONSTRAINT "Option_surveyId_fkey" FOREIGN KEY ("surveyId") REFERENCES "Survey"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
