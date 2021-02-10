import { Router } from "express";
import { GetPizzasSlider } from "../controllers/slide-pizzas.controller";

const router = Router();

router.get("/slide-pizzas", GetPizzasSlider);

export default router;
