import { AppError } from "../../../../error/AppError";
import { CategoriesRepositoriesInMemory } from "../../repositories/in-memory/CategoriesRepositoriesInMemory";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

let createCategoryUseCase: CreateCategoryUseCase;
let categoriesRepositoriesInMemory: CategoriesRepositoriesInMemory;

describe("Create Category", () => {
  beforeEach(() => {
    categoriesRepositoriesInMemory = new CategoriesRepositoriesInMemory();
    createCategoryUseCase = new CreateCategoryUseCase(
      categoriesRepositoriesInMemory
    );
  });

  it("should be able to create a new category", async () => {
    const category = {
      name: "Category Test",
      description: "Category description Test",
    };

    await createCategoryUseCase.execute(category);

    const categoryCreated = await categoriesRepositoriesInMemory.findByName(
      category.name
    );

    expect(categoryCreated).toHaveProperty("id");
  });

  it("should not be able to create a new category if name exists", async () => {
    expect(async () => {
      const category = {
        name: "Category Test",
        description: "Category description Test",
      };

      await createCategoryUseCase.execute(category);
      await createCategoryUseCase.execute(category);
    }).rejects.toBeInstanceOf(AppError);
  });
});
