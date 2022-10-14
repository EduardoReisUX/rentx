import { Specifictation } from "@modules/cars/infra/typeorm/entities/Specification";
import {
  ICreateSpecificationDTO,
  ISpecificationRepository,
} from "../ISpecificationRepository";

export class SpecificationRepositoryInMemory
  implements ISpecificationRepository
{
  specifications: Specifictation[] = [];

  async create({
    name,
    description,
  }: ICreateSpecificationDTO): Promise<Specifictation> {
    const specification = new Specifictation();

    Object.assign(specification, {
      name,
      description,
    });

    this.specifications.push(specification);

    return specification;
  }
  async findByName(name: string): Promise<Specifictation> {
    return this.specifications.find(
      (specification) => specification.name === name
    );
  }
  async findByIds(ids: string[]): Promise<Specifictation[]> {
    return this.specifications.filter((specification) =>
      ids.includes(specification.id)
    );
  }
}
