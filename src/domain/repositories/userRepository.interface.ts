import { UserM } from '../model/user';

// This interface will be important to abstract the repository.
// If in the future you will want to change your ORM or your DB, you will not get problems with your logic
export interface UserRepository {
  getUserByUsername(username: string): Promise<UserM>;
  updateLastLogin(username: string): Promise<void>;
}
