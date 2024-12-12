import { UserCredential } from 'firebase/auth'

export interface AuthRepository {
  signIn(email: string, password: string): Promise<void>
  signUp(email: string, password: string): Promise<UserCredential>
}
