import { Request, Response } from "express";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

export class ListCategoriesController {
  constructor(private listCategoriesUseCase: ListCategoriesUseCase) {}

  handle(resquest: Request, response: Response) {
    return response.json(this.listCategoriesUseCase.execute());
  }
}
