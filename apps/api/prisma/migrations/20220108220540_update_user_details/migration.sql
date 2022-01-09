-- DropForeignKey
ALTER TABLE "Applied" DROP CONSTRAINT "Applied_user_fkey";

-- DropForeignKey
ALTER TABLE "Selected" DROP CONSTRAINT "Selected_user_fkey";

-- AddForeignKey
ALTER TABLE "Applied" ADD CONSTRAINT "Applied_user_fkey" FOREIGN KEY ("user") REFERENCES "UserDetails"("USN") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Selected" ADD CONSTRAINT "Selected_user_fkey" FOREIGN KEY ("user") REFERENCES "UserDetails"("USN") ON DELETE CASCADE ON UPDATE NO ACTION;
