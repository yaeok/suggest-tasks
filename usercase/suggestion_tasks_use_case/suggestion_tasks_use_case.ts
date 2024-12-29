import { GenerateLimitException } from '@/infrastructure/exception/GenerateLimitException';
import {
  FirebaseUserRepository
} from '@/infrastructure/repository/users/impl/FirebaseUserRepository';
import { TaskItem } from '@/model/TaskItem';
import { GeminiService } from '@/service/gemini/GeminiService';

export class SuggestionTaskItemUseCase {
  // GeminiServiceのインスタンス
  private service: GeminiService
  // FirebaseUserRepositoryのインスタンス
  private userRepository: FirebaseUserRepository
  // プロンプト生成制限
  private MAX_PROMPT_LIMIT = 3

  // コンストラクタ
  constructor() {
    // 依存関係の注入
    this.service = new GeminiService()
    this.userRepository = new FirebaseUserRepository()
  }

  /**
   * タスク生成呼び出し処理
   * @param args lebel: string, supplement: string, libraries: string[], targets: string
   * @returns Promise<TaskItem[]>
   */
  async generatetaskItems(args: {
    level: string
    supplement?: string
    libraries: string[]
    targets: string
    technology: string
    uid: string
  }): Promise<TaskItem[]> {
    const { uid } = args
    // プロンプトの生成制限を超えていないか判定
    const limit = await this.userRepository.checkLimit({
      uid: uid,
    })

    if (limit >= this.MAX_PROMPT_LIMIT) {
      throw new GenerateLimitException()
    }
    // プロンプトの作成
    const prompt = this.createPrompt(args)

    const result = await this.service.generateSuddgestTodos({ prompt })

    // プロンプトの生成回数をインクリメント
    await this.userRepository.incrementLimit({ uid: uid })

    const text = result.response.text()

    const json = JSON.parse(text)

    const response = json.taskItems.map((task: any, index: number) => {
      return new TaskItem({
        itemId: '',
        taskId: '',
        title: task.title,
        content: task.content,
        startDate: new Date(task.startDate),
        endDate: new Date(task.endDate),
        duration: task.duration,
        priority: index,
        reference: task.reference,
        isCompleted: false,
        completedAt: null,
        createdAt: new Date(),
        updatedAt: null,
      })
    })

    return response
  }

  private createPrompt(args: {
    level: string
    supplement?: string
    libraries: string[]
    targets: string
    technology: string
  }): string {
    const { level, supplement, libraries, targets, technology } = args

    // string[] から string に変換する
    const library = libraries.join(', ')

    const today = new Date()
    const strToday = `${today.getFullYear()}年${
      today.getMonth() + 1
    }月${today.getDate()}日`

    const prompt = `
      # 背景
      - 私は${technology}の${level}です。
      - ${supplement}

      # 実現したいこと
      - ${targets}を${technology}で実装したい。
      - 開発を通じて、${technology}のスキルを向上させたい。
      
      # 要件
      - ${technology}を使用して${targets}を実装する。
      - ${technology}の基本的な使い方を学びたい。
      - ${library}を使用して${targets}を実装する。
      - タスクの本筋は、${targets}を実装すること。
      - あくまで、${library}は補助的なものとして使用する。
      - 最低でも、一覧画面、詳細画面、登録画面の3つの画面を作成する。
      - CRUDの概念を出来るだけ取り入れる。

      # タスク生成条件
      - タスクの期間は、開始日は${strToday}日とし、最後のタスクの終了日は、1ヶ月後とする。
      - 参考資料があれば、URLを添付してください。
      - タスクは最低5つ以上作成してください。
      - 画面毎に、1つのタスクを作成してください。
        (例: ログイン画面、ユーザー登録画面、Todo一覧画面、Todo登録画面、Todo詳細画面、etc.)
      - ライブラリを使用する場合、そのライブラリの使い方を学ぶためのタスクを作成してください。
      - ライブラリのタスクは${libraries.length}つ以上作成してください。
      - デプロイやテストのタスクは一切作成しません。
      - ライブラリが選択されない場合、DB操作のタスクは一切作成しません

      # タスク形式
      {
        "taskItems": [
          {
            "No.": 0, // タスクの順序
            "title": "", // タスクのタイトル
            "content": "", // タスクの内容
            "startDate": "", // タスク開始予定日
            "endDate": "", // タスク終了予定日
            "duration": 0 // タスクの所要時間(単位: 時間)
            "reference": "" // 参考資料のURL
          }
        ]
      }
    `

    return prompt
  }
}
