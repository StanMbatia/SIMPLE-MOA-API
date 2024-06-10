import express from "express";
import trucks from "../models/trucks.model.js";
import { gettrucks, gettruck, createtruck, updatetruck, deletetruck } from "../controllers/trucks.controller.js";
import authMiddleware from "../middlewares/auth.js"
export const router = express.Router();

//gettrucks
router.get('/', authMiddleware, gettrucks);

//gettruck
router.get('/:id', authMiddleware, gettruck);

//create a truck
router.post('/', authMiddleware, createtruck);

//update a truck
router.put('/:id', authMiddleware, updatetruck);

//delete a truck
router.delete('/:id', authMiddleware, deletetruck);

export default router;