export class RoutePath {
  static readonly HOME = '/'

  static readonly SIGN_UP = '/sign_up'
  static readonly SIGN_IN = '/sign_in'
  static readonly EMAIL_VERIFICATION = '/email_verification'

  static readonly GENERATE = '/generate'
  static readonly TASKS = '/tasks'
  static readonly TASK = (taskId: string) => `/tasks/${taskId}`
  static readonly PROMPT = '/prompt'
  static readonly ACCOUNT = '/account'
  static readonly CONTACT = '/contact'
}
