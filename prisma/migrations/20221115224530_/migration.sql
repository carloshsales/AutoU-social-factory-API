/*
  Warnings:

  - Changed the type of `reactionName` on the `Reaction` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "ReactName" AS ENUM ('LIKE', 'ORGULHO', 'EXCELENTE_TRABALHO', 'COLABORACAO');

-- AlterTable
ALTER TABLE "Reaction" DROP COLUMN "reactionName",
ADD COLUMN     "reactionName" "ReactName" NOT NULL;
