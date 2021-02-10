import { Request, Response } from "express";
import UserSchema, { IUser } from "../models/user.model";
import jwt from "jsonwebtoken";
import { variables } from "../environments/variables";

const getToken = (user: IUser) => {
  return jwt.sign({ _id: user.id }, variables.SECRET_JWT as string, {
    expiresIn: 86400,
  });
};

export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const userDB = (await UserSchema.findOne({ email })) as IUser;
  if (!userDB) {
    return res.status(200).json({
      status: "EL usuario no existe",
    });
  }

  const match = await userDB.comparePasswords(password);
  if (!match) {
    return res.status(200).json({
      status: "La contraseña es incorrecta",
    });
  }

  const token = getToken(userDB);

  return res.status(200).json({
    token,
  });
};
