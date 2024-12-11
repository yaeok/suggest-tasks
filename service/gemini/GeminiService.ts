import {
  GenerateContentResult,
  GoogleGenerativeAI,
} from '@google/generative-ai'

import { geminiAPI } from './config/config'

const genAI = new GoogleGenerativeAI(geminiAPI!)
const model = genAI.getGenerativeModel({
  model: 'gemini-1.5-flash',
  generationConfig: { responseMimeType: 'application/json' },
})

export class GeminiService {
  async generateSuddgestTodos(args: {
    prompt: string
  }): Promise<GenerateContentResult> {
    const { prompt } = args

    // promptを元に学習スケジュールを生成
    const result = await model.generateContent(prompt)

    // 生成結果を返却
    return result
  }
}
