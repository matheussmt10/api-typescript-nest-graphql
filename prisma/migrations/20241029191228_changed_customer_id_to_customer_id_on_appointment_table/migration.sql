/*
  Warnings:

  - You are about to drop the column `customer_id` on the `Appointment` table. All the data in the column will be lost.
  - Added the required column `customerId` to the `Appointment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Appointment" DROP COLUMN "customer_id",
ADD COLUMN     "customerId" TEXT NOT NULL;
