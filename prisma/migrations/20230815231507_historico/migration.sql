-- CreateTable
CREATE TABLE "historico" (
    "emailAluno" TEXT NOT NULL,
    "numeroComputador" INTEGER NOT NULL,
    CONSTRAINT "historico_emailAluno_fkey" FOREIGN KEY ("emailAluno") REFERENCES "alunos" ("email") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "historico_numeroComputador_fkey" FOREIGN KEY ("numeroComputador") REFERENCES "computadores" ("numero") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "historico_emailAluno_key" ON "historico"("emailAluno");
