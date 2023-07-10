import { Router } from "express";
import {
  getSprockets,
  getSprocketById,
  createSprocket,
  updateSprocket,
} from "../controllers/sprocketsController";

const router = Router();

router.get("/", getSprockets);
router.get("/:id", getSprocketById);
router.post("/", createSprocket);
router.put("/:id", updateSprocket);

export default router;
