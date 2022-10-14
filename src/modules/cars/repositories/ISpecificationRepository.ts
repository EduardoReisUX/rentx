import { Specifictation } from "../infra/typeorm/entities/Specification";

export interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

export interface ISpecificationRepository {
  create({
    name,
    description,
  }: ICreateSpecificationDTO): Promise<Specifictation>;
  findByName(name: string): Promise<Specifictation>;
  findByIds(ids: string[]): Promise<Specifictation[]>;
}
