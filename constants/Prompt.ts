export const createTaskSuggestPrompt = (args: {
  level: string
  supplement?: string
  libraries: string[]
  targets: string
  technology: string
}): string => {
  const { level, supplement, libraries, targets, technology } = args

  // string[] から string に変換する
  const library = libraries.join(', ')

  const today = new Date()
  const strToday = `${today.getFullYear()}年${
    today.getMonth() + 1
  }月${today.getDate()}日`

  const prompt = `
      # 背景
      - 私は${technology}の開発しており、レベルは${level}です。
      - ${supplement}
      - あなたは、${technology}の開発を行っており、テックリードとして、私にタスクを割り当てることになりました。

      # 実現したいこと
      - ${targets}の開発を${technology}で実装したいです。
      - 開発を通じて、${technology}を使用した開発の基本的な使い方を学びたいです。
      
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
      - 画面は必ず、一覧画面、詳細画面、登録画面、更新画面、削除画面の5つを作成し、タスクは5つに分割してください。
      - DB操作のタスクがある場合、CRUDの概念を取り入れて、タスクは4つに分割してください。
      - ライブラリを使用する場合、そのライブラリの使い方を学ぶためのタスクを作成してください。
      - ライブラリのタスクは${libraries.length}つ以上作成してください。
      - デプロイやテストのタスクは一切作成しません。
      - ライブラリが選択されない場合、DB操作のタスクは一切不要です。

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
