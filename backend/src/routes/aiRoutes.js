import express from "express";
import { getAiResponse } from "../controllers/aiController.js";

const router = express.Router();

router.get('/chat', getAiResponse);

export default router;