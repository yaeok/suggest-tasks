import { format } from 'date-fns'
import { useForm } from 'react-hook-form'

import { TaskItem } from '@/model/TaskItem'
import { useTaskItemsContext } from '@/provider/GenerateTaskItemsProvider'

type TaskItemEditFormProps = {
  taskItem: TaskItem
  onClose: () => void
}

type TaskItemEditFormType = {
  title: string
  content: string
  startDate: string
  endDate: string
  duration: number
}

export default function TaskItemEditForm({
  taskItem,
  onClose,
}: TaskItemEditFormProps) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<TaskItemEditFormType>({
    defaultValues: {
      title: taskItem.title,
      content: taskItem.content,
      startDate: format(taskItem.startDate, 'yyyy-MM-dd'),
      endDate: format(taskItem.endDate, 'yyyy-MM-dd'),
      duration: taskItem.duration,
    },
  })
  const taskItemsContext = useTaskItemsContext()

  const startDate = watch('startDate')
  const endDate = watch('endDate')

  const onSubmit = handleSubmit((data: TaskItemEditFormType) => {
    const updateTaskItem = new TaskItem({
      ...taskItem,
      title: data.title,
      content: data.content,
      startDate: new Date(data.startDate),
      endDate: new Date(data.endDate),
      duration: parseInt(data.duration.toString()),
    })
    taskItemsContext.updateTaskItemByPriority({
      ...updateTaskItem,
    })
    onClose()
  })
  return (
    <section>
      <form onSubmit={onSubmit} className='py-4 space-y-4'>
        <section>
          <section className='space-y-1'>
            <label className='font-semibold text-gray-500 text-sm'>
              タイトル
            </label>
            <input
              type='text'
              {...register('title', {
                required: '必須入力です',
                maxLength: {
                  value: 50,
                  message: '50文字以内で入力してください',
                },
              })}
              className='w-full p-2 border border-gray-300 rounded-md'
            />
            {errors.title && (
              <span className='text-red-500 text-xs px-4'>
                {errors.title.message}
              </span>
            )}
          </section>

          <section className='space-y-1'>
            <label className='font-semibold text-gray-500 text-sm'>内容</label>
            <textarea
              {...register('content', {
                required: '必須入力です',
                maxLength: {
                  value: 500,
                  message: '500文字以内で入力してください',
                },
              })}
              className='w-full p-2 border border-gray-300 rounded-md resize-none h-32'
            />
            {errors.content && (
              <span className='text-red-500 text-xs px-4'>
                {errors.content.message}
              </span>
            )}
          </section>

          <section className='space-y-1'>
            <label className='font-semibold text-gray-500 text-sm'>
              開始日
            </label>
            <input
              type='date'
              {...register('startDate', {
                required: '必須入力です',
                validate: (value) => {
                  if (endDate && value > endDate) {
                    return '開始日は終了日より前に設定してください'
                  }
                  return true
                },
              })}
              className='w-full p-2 border border-gray-300 rounded-md'
            />
            {errors.startDate && (
              <span className='text-red-500 text-xs px-4'>
                {errors.startDate.message}
              </span>
            )}
          </section>

          <section className='space-y-1'>
            <label className='font-semibold text-gray-500 text-sm'>
              終了日
            </label>
            <input
              type='date'
              {...register('endDate', {
                required: '必須入力です',
                validate: (value) => {
                  if (startDate && value < startDate) {
                    return '終了日は開始日より後に設定してください'
                  }
                  return true
                },
              })}
              className='w-full p-2 border border-gray-300 rounded-md'
            />
            {errors.endDate && (
              <span className='text-red-500 text-xs px-4'>
                {errors.endDate.message}
              </span>
            )}
          </section>

          <section className='space-y-1'>
            <label className='font-semibold text-gray-500 text-sm'>
              所要時間
            </label>
            <input
              type='number'
              min={1}
              {...register('duration', {
                required: '必須入力です',
              })}
              className='w-full p-2 border border-gray-300 rounded-md'
            />
            {errors.duration && (
              <span className='text-red-500 text-xs px-4'>
                {errors.duration.message}
              </span>
            )}
          </section>
        </section>
        <button
          type='submit'
          className='w-full py-2 rounded-full bg-blue-500 text-white font-semibold'
        >
          保存する
        </button>
      </form>
    </section>
  )
}
