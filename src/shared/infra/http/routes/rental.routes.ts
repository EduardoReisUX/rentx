import { CreateRentalController } from "@modules/rentals/useCases/createRental/CreateRentalController";
import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const createRentalController = new CreateRentalController();

export const rentalRoutes = Router();

rentalRoutes.post("/", ensureAuthenticated, createRentalController.handle);
