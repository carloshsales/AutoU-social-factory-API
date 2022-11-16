-- CreateTable
CREATE TABLE "Collaborator" (
    "regist" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "departament" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "image" TEXT NOT NULL,

    CONSTRAINT "Collaborator_pkey" PRIMARY KEY ("regist")
);

-- CreateTable
CREATE TABLE "Reaction" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "point" INTEGER NOT NULL,
    "collaborator_received_regist" INTEGER NOT NULL,
    "collaborator_sended_regist" INTEGER NOT NULL,

    CONSTRAINT "Reaction_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Collaborator_regist_key" ON "Collaborator"("regist");

-- CreateIndex
CREATE UNIQUE INDEX "Reaction_id_key" ON "Reaction"("id");

-- AddForeignKey
ALTER TABLE "Reaction" ADD CONSTRAINT "Reaction_collaborator_received_regist_fkey" FOREIGN KEY ("collaborator_received_regist") REFERENCES "Collaborator"("regist") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reaction" ADD CONSTRAINT "Reaction_collaborator_sended_regist_fkey" FOREIGN KEY ("collaborator_sended_regist") REFERENCES "Collaborator"("regist") ON DELETE RESTRICT ON UPDATE CASCADE;
