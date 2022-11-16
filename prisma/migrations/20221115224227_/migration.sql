/*
  Warnings:

  - You are about to drop the column `collaborator_received_regist` on the `Reaction` table. All the data in the column will be lost.
  - You are about to drop the column `collaborator_sended_regist` on the `Reaction` table. All the data in the column will be lost.
  - Added the required column `collaboratorReceivedRegist` to the `Reaction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `collaboratorSendedRegist` to the `Reaction` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Reaction" DROP CONSTRAINT "Reaction_collaborator_received_regist_fkey";

-- DropForeignKey
ALTER TABLE "Reaction" DROP CONSTRAINT "Reaction_collaborator_sended_regist_fkey";

-- AlterTable
ALTER TABLE "Reaction" DROP COLUMN "collaborator_received_regist",
DROP COLUMN "collaborator_sended_regist",
ADD COLUMN     "collaboratorReceivedRegist" INTEGER NOT NULL,
ADD COLUMN     "collaboratorSendedRegist" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Reaction" ADD CONSTRAINT "Reaction_collaboratorReceivedRegist_fkey" FOREIGN KEY ("collaboratorReceivedRegist") REFERENCES "Collaborator"("regist") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reaction" ADD CONSTRAINT "Reaction_collaboratorSendedRegist_fkey" FOREIGN KEY ("collaboratorSendedRegist") REFERENCES "Collaborator"("regist") ON DELETE RESTRICT ON UPDATE CASCADE;
