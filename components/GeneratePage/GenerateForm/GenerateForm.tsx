import { useForm } from 'react-hook-form'

import { GenerateLimitException } from '@/infrastructure/exception/GenerateLimitException'
import { UserNotFoundException } from '@/infrastructure/exception/UserNotFoundException'
import { Task } from '@/model/Task'
import { TaskItem } from '@/model/TaskItem'
import { useAuthContext } from '@/provider/CurrentUserProvider'
import { SuggestionTaskItemUseCase } from '@/usercase/suggestion_tasks_use_case/suggestion_tasks_use_case'

type GenerateFormProps = {
  setTask: (task: Task) => void
  setTaskItems: (taskItems: TaskItem[]) => void
  setLoading: (loading: boolean) => void
  openModal: () => void
  setMessage: (message: string) => void
}

type GenerateFormType = {
  level: string
  supplement?: string
  libraries: string[]
  technology: string
  targets: string
}
export default function GenerateForm({
  setTaskItems,
  setTask,
  setLoading,
  openModal,
  setMessage,
}: GenerateFormProps) {
  const currentUser = useAuthContext()?.currentUser
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<GenerateFormType>({
    defaultValues: {
      level: '未経験',
      libraries: [],
      technology: 'flutter',
      targets: 'ToDoアプリ',
    },
  })
  const onSubmit = handleSubmit(async (data: GenerateFormType) => {
    setLoading(true)
    const { level, supplement, libraries, technology, targets } = data
    try {
      if (!currentUser) {
        throw new UserNotFoundException()
      }
      const usecase = new SuggestionTaskItemUseCase()
      const result = await usecase.generatetaskItems({
        level,
        supplement,
        libraries,
        targets,
        technology,
        uid: currentUser.uid,
      })
      setTask({
        taskId: '',
        target: targets,
        technology: technology,
        ownerId: '',
        isCompleted: false,
        completedAt: null,
        createdAt: new Date(),
      })
      setTaskItems(result)
    } catch (error) {
      if (error instanceof UserNotFoundException) {
        openModal()
        setMessage(error.message)
      } else if (error instanceof GenerateLimitException) {
        openModal()
        setMessage(error.message)
      } else {
        openModal()
        setMessage('エラーが発生しました。管理者へお問い合わせください')
      }
    } finally {
      setLoading(false)
    }
  })

  const levels = ['未経験', '初心者', '中級者']
  const libraries = [
    'riverpods',
    'flutter_hooks',
    'freezed',
    'flutter_gen',
    'shared_preferences',
    'go_router',
    'webview_flutter',
    'firebase_auth',
    'firebase_firestore',
    'firebase_storage',
  ]
  const technology = ['flutter']
  const targets = [
    'ToDoアプリ',
    'カレンダーアプリ',
    'ログイン機能',
    'ブログ投稿',
  ]
  return (
    <form className='w-full flex flex-col gap-8' onSubmit={onSubmit}>
      <div className='w-full flex flex-row gap-8'>
        <section className='w-1/2 flex flex-col items-center gap-4'>
          <section className='w-full flex flex-col gap-2'>
            <label htmlFor='channel' className='text-xs text-start'>
              レベル
            </label>
            <select
              id='level'
              {...register('level', {
                required: 'レベルを選択してください',
              })}
              className='p-2 border-2 rounded-md'
              defaultValue={levels[0]}
            >
              {levels.map((level) => (
                <option key={level} value={level}>
                  {level}
                </option>
              ))}
            </select>
            {errors.level && (
              <span className='px-2 text-xs text-red-500'>
                {errors.level.message}
              </span>
            )}
          </section>
          <section className='w-full flex flex-col gap-2'>
            <label htmlFor='channel' className='text-xs text-start'>
              補足情報
            </label>
            <textarea
              id='supplment'
              {...register('supplement', { required: false })}
              placeholder='Java1年の経験があります...etc'
              className='p-2 border-2 rounded-md resize-none h-44'
            ></textarea>
          </section>
        </section>
        <section className='w-1/2 flex flex-col items-center gap-4'>
          <section className='w-full flex flex-col gap-2'>
            <label htmlFor='technology' className='text-xs text-start'>
              学びたい技術
            </label>
            <select
              id='technology'
              {...register('technology', {
                required: '技術を選択してください',
              })}
              className='p-2 border-2 rounded-md'
            >
              {technology.map((tech) => (
                <option key={tech} value={tech}>
                  {tech}
                </option>
              ))}
            </select>
            {errors.technology && (
              <span className='px-2 text-xs text-red-500'>
                {errors.technology.message}
              </span>
            )}
          </section>
          <section className='w-full flex flex-col gap-2'>
            <label htmlFor='technology' className='text-xs text-start'>
              実現したい機能・アプリ
            </label>
            <select
              id='targets'
              {...register('targets', {
                required: '実現したい機能・アプリを選択してください',
              })}
              className='p-2 border-2 rounded-md'
            >
              {targets.map((target) => (
                <option key={target} value={target}>
                  {target}
                </option>
              ))}
            </select>
            {errors.targets && (
              <span className='px-2 text-xs text-red-500'>
                {errors.targets.message}
              </span>
            )}
          </section>
          <section className='w-full flex flex-col gap-2'>
            <label htmlFor='libraries' className='text-xs text-start'>
              使用するライブラリ
            </label>
            <div className='flex flex-row flex-wrap gap-2'>
              {libraries.map((library) => (
                <label
                  key={library}
                  className='flex flex-row items-center gap-2'
                >
                  <input
                    type='checkbox'
                    {...register('libraries')}
                    value={library}
                    className='hidden peer'
                  />
                  <span className='w-4 h-4 inline-block border border-gray-400 rounded-full cursor-pointer peer-checked:bg-blue-500 peer-checked:border-blue-500' />
                  <span>{library}</span>
                </label>
              ))}
            </div>
          </section>
        </section>
      </div>
      <div className='w-full flex justify-center'>
        <button
          type='submit'
          className='px-4 py-2 text-white font-semibold bg-blue-500 rounded-full shadow-lg hover:shadow-none hover:translate-y-1 hover:duration-300 transition-all'
        >
          生成する
        </button>
      </div>
    </form>
  )
}
