import { FirebaseContactRepository } from '@/infrastructure/repository/contacts/impl/FirebaseContactRepository'

import { UseCase, UseCaseInput, UseCaseOutput } from '../use_case'

interface SaveContactUseCaseInput extends UseCaseInput {
  type: string
  email: string
  content: string
}

interface SaveContactUseCaseOutput extends UseCaseOutput {
  result: boolean
}

export class SaveContactUseCase
  implements
    UseCase<SaveContactUseCaseInput, Promise<SaveContactUseCaseOutput>>
{
  private contactRepository: FirebaseContactRepository

  constructor() {
    this.contactRepository = new FirebaseContactRepository()
  }

  async execute(
    input: SaveContactUseCaseInput
  ): Promise<SaveContactUseCaseOutput> {
    const { type, email, content } = input

    // ここに処理を記述
    await this.contactRepository.createContact({
      type,
      email,
      content,
    })

    return { result: true }
  }
}
