import Link from 'next/link'

import { TaskItem } from '@/model/TaskItem'

import TaskItemMenuButton from './TaskItemMenuButton/TaskItemMenuButton'

type TaskItemListItemProps = {
  task: TaskItem
  index: number
}

export default function TaskItemListItem({
  task,
  index,
}: TaskItemListItemProps) {
  return (
    <section
      key={index}
      className='w-full p-6 bg-white rounded-lg border-t-8 border-blue-500 flex flex-col justify-between items-center gap-4 relative'
    >
      <div className='w-full flex flex-col items-start gap-4'>
        <div className='w-full flex flex-row justify-between items-start'>
          <h1 className='flex-1 text-xl font-extrabold text-black'>
            {task.title}
          </h1>
          <TaskItemMenuButton />
        </div>
        <div className='flex flex-col items-start gap-2'>
          <p className='text-sm border-b-2 border-black font-semibold'>
            学習予定期間
          </p>
          <h2 className='text-sm font-semibold text-gray-700'>
            {task.startDate.toLocaleDateString()} ~{' '}
            {task.endDate.toLocaleDateString()}
          </h2>
        </div>
        <p className='text-sm font-normal text-black'>{task.content}</p>
        <div className='flex flex-row justify-between items-center gap-4'>
          <span className='text-sm font-semibold text-gray-700'>
            {task.duration}時間
          </span>
          {task.reference && (
            <Link
              href={task.reference}
              target='_blank'
              className='text-sm font-semibold text-blue-500'
            >
              参考資料
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
