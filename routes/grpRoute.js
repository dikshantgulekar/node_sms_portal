import express from "express";
import { addGrp, showGroup } from "../controllers/grpController.js";


const grpRoute = express.Router()

grpRoute
.get('/', showGroup)
.post('/', addGrp)

export default grpRoute;
