import { CategoriesRepository } from "../repositories/CategoriesRepository";
import { CreateCategoryController } from "./createCategory/CreateCategoryController";
import { CreateCategoryUseCase } from "./createCategory/CreateCategoryUseCase";

export const categoriesRepository = new CategoriesRepository();
export const createCategoryUseCase = new CreateCategoryUseCase(
  categoriesRepository
);
export const createCategoryController = new CreateCategoryController(
  createCategoryUseCase
);
