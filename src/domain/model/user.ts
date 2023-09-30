export class UserWithoutPassword {
  id: number;
  username: string;
  email: string;
}

export class UserM extends UserWithoutPassword {
  password: string;
}
