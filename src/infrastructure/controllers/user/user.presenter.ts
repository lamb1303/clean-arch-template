import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/infrastructure/entities/user.entity';

export class UserPresenter {
  @ApiProperty()
  id: number;
  @ApiProperty()
  username: string;
  @ApiProperty()
  email: string;
  @ApiProperty()
  last_login?: Date;

  constructor(user: User) {
    this.id = user.id;
    this.username = user.username;
    this.email = user.email;
    this.last_login = user.last_login;
  }
}
