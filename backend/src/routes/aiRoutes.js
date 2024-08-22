import express from "express";
import { getAiResponse, test } from "../controllers/aiController.js";

const router = express.Router();

router.get('/chat', getAiResponse);
router.post('/chat', getAiResponse);

router.get('/test', test)

export default router;