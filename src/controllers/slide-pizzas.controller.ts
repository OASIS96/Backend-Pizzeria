import { Request, Response } from "express";

export const GetPizzasSlider = (req: Request, res: Response) => {
  res.status(200).json({
    message: "Recivido",
  });
};
