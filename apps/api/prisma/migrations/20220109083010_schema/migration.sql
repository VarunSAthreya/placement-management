/*
  Warnings:

  - The primary key for the `Applied` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `company` on the `Applied` table. All the data in the column will be lost.
  - You are about to drop the column `user` on the `Applied` table. All the data in the column will be lost.
  - The primary key for the `Selected` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `company` on the `Selected` table. All the data in the column will be lost.
  - You are about to drop the column `user` on the `Selected` table. All the data in the column will be lost.
  - Added the required column `companyID` to the `Applied` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userID` to the `Applied` table without a default value. This is not possible if the table is not empty.
  - Added the required column `companyID` to the `Selected` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userID` to the `Selected` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Applied" DROP CONSTRAINT "Applied_company_fkey";

-- DropForeignKey
ALTER TABLE "Applied" DROP CONSTRAINT "Applied_user_fkey";

-- DropForeignKey
ALTER TABLE "Selected" DROP CONSTRAINT "Selected_company_fkey";

-- DropForeignKey
ALTER TABLE "Selected" DROP CONSTRAINT "Selected_user_fkey";

-- AlterTable
ALTER TABLE "Applied" DROP CONSTRAINT "Applied_pkey",
DROP COLUMN "company",
DROP COLUMN "user",
ADD COLUMN     "companyID" VARCHAR NOT NULL,
ADD COLUMN     "userID" VARCHAR NOT NULL,
ADD CONSTRAINT "Applied_pkey" PRIMARY KEY ("userID", "companyID");

-- AlterTable
ALTER TABLE "Selected" DROP CONSTRAINT "Selected_pkey",
DROP COLUMN "company",
DROP COLUMN "user",
ADD COLUMN     "companyID" VARCHAR NOT NULL,
ADD COLUMN     "userID" VARCHAR NOT NULL,
ADD CONSTRAINT "Selected_pkey" PRIMARY KEY ("userID", "companyID");

-- AddForeignKey
ALTER TABLE "Applied" ADD CONSTRAINT "Applied_companyID_fkey" FOREIGN KEY ("companyID") REFERENCES "Company"("name") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Applied" ADD CONSTRAINT "Applied_userID_fkey" FOREIGN KEY ("userID") REFERENCES "UserDetails"("USN") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Selected" ADD CONSTRAINT "Selected_companyID_fkey" FOREIGN KEY ("companyID") REFERENCES "Company"("name") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Selected" ADD CONSTRAINT "Selected_userID_fkey" FOREIGN KEY ("userID") REFERENCES "UserDetails"("USN") ON DELETE CASCADE ON UPDATE NO ACTION;
