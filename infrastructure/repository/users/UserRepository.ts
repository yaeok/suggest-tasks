import { User } from '@/model/User'

export interface UserRepository {
  getUserById(args: { uid: string }): Promise<User>
  createUser(args: { user: User }): Promise<void>
  incrementLimit(args: { uid: string }): Promise<void>
  checkLimit(args: { uid: string }): Promise<number>
  updateUsername(args: { uid: string; username: string }): Promise<boolean>
}
