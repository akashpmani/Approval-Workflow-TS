-- CreateEnum
CREATE TYPE "UserRoles" AS ENUM ('HR', 'MANAGER', 'USER');

-- CreateEnum
CREATE TYPE "PurchaseStatus" AS ENUM ('REQUESTED', 'APPROVED', 'REJECTED');

-- CreateEnum
CREATE TYPE "PaymentModes" AS ENUM ('CASH', 'CARD', 'DIGITAL');

-- CreateEnum
CREATE TYPE "Items" AS ENUM ('LAPTOP', 'KEYBOARD', 'MOUSE', 'MONITOR');

-- CreateEnum
CREATE TYPE "ExpenseClaimsStatus" AS ENUM ('REQUESTED', 'APPROVED', 'CLAIMED', 'REJECTED');

-- CreateEnum
CREATE TYPE "LeaveRequestStatus" AS ENUM ('REQUESTED', 'APPROVED', 'CANCELLED', 'REJECTED');

-- CreateEnum
CREATE TYPE "LeaveTypes" AS ENUM ('SICK_LEAVE', 'CASUAL_LEAVE', 'LOSS_OF_PAY');

-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "first_name" TEXT,
    "last_name" TEXT,
    "phone" TEXT,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "is_verified" BOOLEAN NOT NULL DEFAULT false,
    "role" "UserRoles" NOT NULL DEFAULT 'USER',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "purchase_order" (
    "id" SERIAL NOT NULL,
    "po_number" TEXT NOT NULL,
    "vendor" TEXT NOT NULL,
    "vendor_address" TEXT,
    "status" "PurchaseStatus" NOT NULL,
    "payment_mode" "PaymentModes" NOT NULL,
    "payment_amount" DECIMAL(65,30) NOT NULL,
    "payment_reference" TEXT NOT NULL,
    "additional_details" JSONB,
    "requested_at" TIMESTAMP(3) NOT NULL,
    "requested_by_id" INTEGER NOT NULL,
    "approved_at" TIMESTAMP(3) NOT NULL,
    "approved_by_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "purchase_order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "purchase_order_items" (
    "id" SERIAL NOT NULL,
    "master_ref_id" INTEGER NOT NULL,
    "item" "Items" NOT NULL,
    "quantity" INTEGER NOT NULL,
    "rate" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "purchase_order_items_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "user_username_key" ON "user"("username");

-- CreateIndex
CREATE UNIQUE INDEX "user_phone_key" ON "user"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "purchase_order_po_number_key" ON "purchase_order"("po_number");

-- CreateIndex
CREATE INDEX "purchase_order_id_po_number_idx" ON "purchase_order"("id", "po_number");

-- AddForeignKey
ALTER TABLE "purchase_order" ADD CONSTRAINT "purchase_order_requested_by_id_fkey" FOREIGN KEY ("requested_by_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "purchase_order" ADD CONSTRAINT "purchase_order_approved_by_id_fkey" FOREIGN KEY ("approved_by_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "purchase_order_items" ADD CONSTRAINT "purchase_order_items_master_ref_id_fkey" FOREIGN KEY ("master_ref_id") REFERENCES "purchase_order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
