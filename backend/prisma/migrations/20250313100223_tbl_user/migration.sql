/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `tbl_users` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "tbl_users_id_key" ON "tbl_users"("id");
