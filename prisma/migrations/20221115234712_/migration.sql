/*
  Warnings:

  - Changed the type of `reactionName` on the `Reaction` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Reaction" DROP COLUMN "reactionName",
ADD COLUMN     "reactionName" TEXT NOT NULL;

-- DropEnum
DROP TYPE "ReactName";
