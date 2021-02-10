import { Request, Response } from "express";
import UserSchema from "../models/user.model";

export const singupUser = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const newUser = new UserSchema({ username, password });
  await newUser.save();
  return res.status(200).json({ status: "Usuario creado satisfactoriamente" });
};
