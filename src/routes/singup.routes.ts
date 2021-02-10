import { Router } from "express";
import { singupUser } from "../controllers/singup.controller";

const router = Router();

router.post("/singup-user", singupUser);

export default router;
