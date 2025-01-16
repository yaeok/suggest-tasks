import Link from 'next/link'
import { IconContext } from 'react-icons'
import { SiNextdotjs } from 'react-icons/si'

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
      className='w-full p-6 bg-white rounded-lg border-l-8 border-blue-500 flex flex-col justify-between items-center gap-4 relative'
    >
      <div className='absolute top-5 right-5'>
        <TaskItemMenuButton />
      </div>
      <div className='w-full flex flex-row items-center gap-8'>
        <div className='w-1/3 flex justify-center items-center'>
          <IconContext.Provider value={{ size: '7em' }}>
            <SiNextdotjs />
          </IconContext.Provider>
        </div>
        <div className='w-2/3 flex flex-col gap-4 items-start'>
          <div className='flex flex-col justify-between gap-4'>
            <h1 className='text-xl font-extrabold text-black'>{task.title}</h1>
            <div className='flex flex-col items-start gap-2'>
              <p className='text-sm border-b border-black'>学習予定期間</p>
              <h2 className='text-sm font-semibold text-gray-400'>
                {task.startDate.toLocaleDateString()} ~{' '}
                {task.endDate.toLocaleDateString()}
              </h2>
            </div>
          </div>
          <p className='text-sm font-normal text-black'>{task.content}</p>
          <div className='flex flex-row justify-between items-center gap-4'>
            <span className='text-sm font-semibold text-gray-400'>
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
      </div>
    </section>
  )
}
