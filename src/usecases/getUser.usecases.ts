import { ILogger } from 'src/domain/logger.interface';
import { UserRepository } from 'src/domain/repositories/userRepository.interface';
import { User } from 'src/infrastructure/entities/user.entity';

export class GetUserUseCases {
  constructor(
    private readonly logger: ILogger,
    private readonly userRepository: UserRepository,
  ) {}

  async execute(name: string): Promise<User> {
    this.logger.log('GetUserByName execute', `User ${name}`);
    return await this.userRepository.getUserByUsername(name);
  }
}
