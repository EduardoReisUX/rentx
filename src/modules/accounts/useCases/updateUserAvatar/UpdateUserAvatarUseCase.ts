import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
  avatar_file: string;
}

@injectable()
export class UpdateUserAvatarUseCase {
  constructor(
    @inject("UserRepository")
    private usersRepository: IUsersRepository
  ) {}
  async execute({ user_id, avatar_file }: IRequest): Promise<void> {
    const user = await this.usersRepository.findByEmail(user_id);

    user.avatar = avatar_file;

    await this.usersRepository.create(user);
  }
}
