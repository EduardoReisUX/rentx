import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { UsersRepository } from "../modules/accounts/repositories/implementations/UsersRepository";

interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new Error("Token missing");
  }

  // Bearer 89sd6789s6g78fg8
  // [0] = Bearer
  // [1] = 89sd6789s6g78fg8
  const [, token] = authHeader.split(" ");

  try {
    const { sub: user_id } = verify(
      token,
      "94e2c128c93bec67fe599c3c1aafbb0fbec1aab90519c1443fe46345ce156768"
    ) as IPayload;

    const usersRepository = new UsersRepository();
    const user = await usersRepository.findById(user_id);

    if (!user) {
      throw new Error("User doesn't exsits!");
    }

    next();
  } catch (error) {
    throw new Error("Invalid token!");
  }
}
