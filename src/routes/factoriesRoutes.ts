import { Router } from "express";
import {
  getFactories,
  getFactoryById,
} from "../controllers/factoriesController";

const router = Router();

router.get("/", getFactories);
router.get("/:id", getFactoryById);

export default router;
