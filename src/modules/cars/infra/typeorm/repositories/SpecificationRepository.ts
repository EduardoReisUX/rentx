import {
  ICreateSpecificationDTO,
  ISpecificationRepository,
} from "@modules/cars/repositories/ISpecificationRepository";
import { getRepository, Repository } from "typeorm";

import { Specifictation } from "../entities/Specification";

export class SpecificationsRepository implements ISpecificationRepository {
  private repository: Repository<Specifictation>;

  constructor() {
    this.repository = getRepository(Specifictation);
  }

  async create({
    name,
    description,
  }: ICreateSpecificationDTO): Promise<Specifictation> {
    const specification = this.repository.create({
      name,
      description,
    });

    await this.repository.save(specification);

    return specification;
  }

  async findByName(name: string): Promise<Specifictation> {
    return await this.repository.findOne({ name });
  }

  async findByIds(ids: string[]): Promise<Specifictation[]> {
    return await this.repository.findByIds(ids);
  }
}
