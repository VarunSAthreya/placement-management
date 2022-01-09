-- CreateEnum
CREATE TYPE "Braches" AS ENUM ('CSE', 'ECE', 'ISE', 'ME', 'CV', 'EIE', 'IEM');

-- CreateEnum
CREATE TYPE "CompanyType" AS ENUM ('SERVICE', 'PRODUCT');

-- CreateEnum
CREATE TYPE "Roles" AS ENUM ('ADMIN', 'STUDENT');

-- CreateEnum
CREATE TYPE "Sections" AS ENUM ('A', 'B', 'C');

-- CreateTable
CREATE TABLE "Applied" (
    "user" VARCHAR NOT NULL,
    "company" VARCHAR NOT NULL,

    CONSTRAINT "Applied_pkey" PRIMARY KEY ("user","company")
);

-- CreateTable
CREATE TABLE "Company" (
    "name" VARCHAR NOT NULL,
    "arrival_date" TIMESTAMP(6),
    "type" "CompanyType" NOT NULL,
    "package" DOUBLE PRECISION,

    CONSTRAINT "Company_pkey" PRIMARY KEY ("name")
);

-- CreateTable
CREATE TABLE "CompanyEdibility" (
    "name" VARCHAR NOT NULL,
    "CGPA" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "backlogs" INTEGER NOT NULL DEFAULT 0,
    "tenth" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "twelth" DOUBLE PRECISION NOT NULL DEFAULT 0.0,

    CONSTRAINT "CompanyEdibility_pkey" PRIMARY KEY ("name")
);

-- CreateTable
CREATE TABLE "Selected" (
    "user" VARCHAR NOT NULL,
    "company" VARCHAR NOT NULL,

    CONSTRAINT "Selected_pkey" PRIMARY KEY ("user","company")
);

-- CreateTable
CREATE TABLE "User" (
    "USN" VARCHAR NOT NULL,
    "name" VARCHAR NOT NULL,
    "email" VARCHAR NOT NULL,
    "password" VARCHAR NOT NULL,
    "role" "Roles" NOT NULL DEFAULT E'STUDENT',
    "created_at" TIMESTAMP(6) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("USN")
);

-- CreateTable
CREATE TABLE "UserDetails" (
    "USN" VARCHAR NOT NULL,
    "year" INTEGER NOT NULL,
    "branch" "Braches" NOT NULL,
    "section" "Sections" NOT NULL,
    "elegible" BOOLEAN NOT NULL DEFAULT true,
    "placed" BOOLEAN NOT NULL DEFAULT false,
    "CGPA" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "backlogs" INTEGER NOT NULL DEFAULT 0,
    "tenth" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "twelth" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "package" DOUBLE PRECISION NOT NULL DEFAULT 0.0,

    CONSTRAINT "UserDetails_pkey" PRIMARY KEY ("USN")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Applied" ADD CONSTRAINT "Applied_company_fkey" FOREIGN KEY ("company") REFERENCES "Company"("name") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Applied" ADD CONSTRAINT "Applied_user_fkey" FOREIGN KEY ("user") REFERENCES "User"("USN") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "CompanyEdibility" ADD CONSTRAINT "CompanyEdibility_name_fkey" FOREIGN KEY ("name") REFERENCES "Company"("name") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Selected" ADD CONSTRAINT "Selected_company_fkey" FOREIGN KEY ("company") REFERENCES "Company"("name") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Selected" ADD CONSTRAINT "Selected_user_fkey" FOREIGN KEY ("user") REFERENCES "User"("USN") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "UserDetails" ADD CONSTRAINT "UserDetails_USN_fkey" FOREIGN KEY ("USN") REFERENCES "User"("USN") ON DELETE CASCADE ON UPDATE NO ACTION;
