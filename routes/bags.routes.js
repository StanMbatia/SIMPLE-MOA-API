import express from "express";
import bags from "../models/bags.model.js";
import { getbags, getbag, createbag, updatebag, deletebag } from "../controllers/bags.controller.js";
import authMiddleware from "../middlewares/auth.js";
export const router = express.Router();

//getbags
router.get('/', authMiddleware, getbags);

//getbag
router.get('/:id', authMiddleware, getbag);

//create a bag
router.post('/', authMiddleware, createbag);

//update a bag
router.put('/:id', authMiddleware, updatebag);

// delete a bag
router.delete('/:id', authMiddleware, deletebag);

export default router;