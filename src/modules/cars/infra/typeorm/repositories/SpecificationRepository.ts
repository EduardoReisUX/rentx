import { getRepository, Repository } from "typeorm";
import { Specifictation } from "../../infra/typeorm/entities/Specification";
import {
  ICreateSpecificationDTO,
  ISpecificationRepository,
} from "../ISpecificationRepository";

export class SpecificationsRepository implements ISpecificationRepository {
  private repository: Repository<Specifictation>;

  constructor() {
    this.repository = getRepository(Specifictation);
  }

  async create({ name, description }: ICreateSpecificationDTO): Promise<void> {
    const specification = this.repository.create({
      name,
      description,
    });

    await this.repository.save(specification);
  }

  async findByName(name: string): Promise<Specifictation> {
    return this.repository.findOne({ name });
  }
}
