export class GenerateLimitException extends Error {
  constructor(message?: string) {
    super(message || 'タスクの生成回数が上限に達しました')
    this.name = 'GenerateLimitException'
  }
}
