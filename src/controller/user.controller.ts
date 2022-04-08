import { Request, Response } from "express";
import log from "../utils/logger";
import { createUser } from "../services/user.service";
import { createUserInput } from "../shema/user.shema";
import { omit } from "lodash";


export async function createUserHandler(req: Request<{}, {}, createUserInput["body"]>, res: Response) {
  try {
    const user = await createUser(req.body)
    return res.send(user)
  } catch (e: any) {
    log.error(e)
    return res.status(409).send(e.message);
  }
}