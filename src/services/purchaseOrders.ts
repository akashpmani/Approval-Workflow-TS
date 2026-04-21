import { z } from "zod";
import { poSchema, poApproveOrRejectSchema } from "../schemas/poSchema";
import { PoModel } from "src/models/purchaseOrders";
import { TokenPayload } from "src/configs/jwt";
import { UserRoles, PurchaseStatus } from "prisma/generated";
import { createPONumber } from "src/utils/common";
import { Request } from "express";
import { ErrorHandler } from "src/utils/errorhandler";

type PoInput = z.infer<typeof poSchema>;
type PoApproveOrRejectInput = z.infer<typeof poApproveOrRejectSchema>;

export class PoService {
  private poModel = new PoModel()

  request = async (req: Request) => {
    const data: PoInput = req.body;
    const user: TokenPayload | undefined = req.user;
    if (!user){
        throw new ErrorHandler(400, "Unauthorized");
    }
    if (user.role !== UserRoles.USER) {
      throw new ErrorHandler(
        400,
        "you are not authorised to perform this action",
      );
    }
    return this.poModel.create(data, user.id, { po_number: createPONumber() });
  };

  approve = async (req: Request) => {
    const data: PoApproveOrRejectInput = req.body;
    const user: TokenPayload | undefined = req.user;

    if (!user) {
      throw new ErrorHandler(400, "Unauthorized");
    }
    const po = await this.poModel.getOne(data.id);
    if (!po) {
      throw new ErrorHandler(400, "Purchase order not found");
    }
    if (po.status !== PurchaseStatus.REQUESTED){
      throw new ErrorHandler(400, "Can only approve requested orders");
    }
    return this.poModel.update(data.id, PurchaseStatus.APPROVED);
  };

  reject = async (req: Request) => {
    const data: PoApproveOrRejectInput = req.body;
    const user: TokenPayload | undefined = req.user;

    if (!user) {
      throw new ErrorHandler(400, "Unauthorized");
    }
    const po = await this.poModel.getOne(data.id);
    if (!po) {
      throw new ErrorHandler(400, "Purchase order not found");
    }
    if (po.status !== PurchaseStatus.REQUESTED) {
      throw new ErrorHandler(400, "Can only reject requested orders");
    }
    return this.poModel.update(data.id, PurchaseStatus.REJECTED);
  };

  get = async (data: { id?: number }) => {
    if (data.id) {
      const po = await this.poModel.getOne(data.id);
      if (!po) throw new ErrorHandler(400, "Purchase order not found");
      return po;
    }
    return this.poModel.getAll();
  };
}
