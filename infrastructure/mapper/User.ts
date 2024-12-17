import { UserDTO } from '@/infrastructure/dto/UserTDO'
import { User } from '@/model/User'

export class UserMapper {
  static toDomain(dto: UserDTO): User {
    return new User({
      uid: dto.uid,
      username: dto.username,
      email: dto.email,
      limit: dto.limit,
      createdAt: dto.createdAt,
    })
  }
}
