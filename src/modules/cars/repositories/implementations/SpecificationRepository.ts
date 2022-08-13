import { Specifictation } from "../model/Specification";
import {
  ICreateSpecificationDTO,
  ISpecificationRepository,
} from "./ISpecificationRepository";

export class SpecificationsRepository implements ISpecificationRepository {
  private specifications: Specifictation[];

  constructor() {
    this.specifications = [];
  }

  create({ name, description }: ICreateSpecificationDTO): void {
    const specification = new Specifictation();

    Object.assign(specification, {
      name,
      description,
      created_at: new Date(),
    });

    this.specifications.push(specification);
  }

  findByName(name: string): Specifictation {
    return this.specifications.find(
      (specification) => specification.name === name
    );
  }
}
