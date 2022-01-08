/*
  Warnings:

  - You are about to drop the column `elegible` on the `UserDetails` table. All the data in the column will be lost.
  - You are about to drop the `CompanyEdibility` table. If the table is not empty, all the data it contains will be lost.
  - Changed the type of `branch` on the `UserDetails` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "Branches" AS ENUM ('CSE', 'ECE', 'ISE', 'ME', 'CV', 'EIE', 'IEM');

-- DropForeignKey
ALTER TABLE "CompanyEdibility" DROP CONSTRAINT "CompanyEdibility_name_fkey";

-- AlterTable
ALTER TABLE "UserDetails" DROP COLUMN "elegible",
ADD COLUMN     "eligible" BOOLEAN NOT NULL DEFAULT true,
DROP COLUMN "branch",
ADD COLUMN     "branch" "Branches" NOT NULL;

-- DropTable
DROP TABLE "CompanyEdibility";

-- DropEnum
DROP TYPE "Braches";

-- CreateTable
CREATE TABLE "CompanyEligibility" (
    "name" VARCHAR NOT NULL,
    "CGPA" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "backlogs" INTEGER NOT NULL DEFAULT 0,
    "tenth" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "twelth" DOUBLE PRECISION NOT NULL DEFAULT 0.0,

    CONSTRAINT "CompanyEligibility_pkey" PRIMARY KEY ("name")
);

-- AddForeignKey
ALTER TABLE "CompanyEligibility" ADD CONSTRAINT "CompanyEligibility_name_fkey" FOREIGN KEY ("name") REFERENCES "Company"("name") ON DELETE CASCADE ON UPDATE NO ACTION;
