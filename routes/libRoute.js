import express from "express";
import { addLibrary, showLibrary } from "../controllers/libController.js";

const libRoute = express.Router()

libRoute
.get('/', showLibrary)
.post('/', addLibrary)

export default libRoute;
