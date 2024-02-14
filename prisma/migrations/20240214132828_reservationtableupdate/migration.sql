/*
  Warnings:

  - Added the required column `country` to the `TripReservation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `guests` to the `TripReservation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hotel` to the `TripReservation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `location` to the `TripReservation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `picture` to the `TripReservation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "TripReservation" ADD COLUMN     "country" TEXT NOT NULL,
ADD COLUMN     "guests" INTEGER NOT NULL,
ADD COLUMN     "hotel" TEXT NOT NULL,
ADD COLUMN     "location" TEXT NOT NULL,
ADD COLUMN     "picture" TEXT NOT NULL;
