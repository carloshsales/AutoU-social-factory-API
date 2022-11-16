/*
  Warnings:

  - Added the required column `reactions_count` to the `Collaborator` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Collaborator" ADD COLUMN     "reactions_count" INTEGER NOT NULL;
