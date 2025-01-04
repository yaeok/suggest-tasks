import Link from 'next/link'
import { IconContext } from 'react-icons'
import { BiLogoFlutter } from 'react-icons/bi'

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
      className='w-full p-6 bg-white rounded-lg border-l-8 border-blue-500 flex flex-col justify-between items-center gap-4'
    >
      <section className='w-full flex flex-col items-center gap-8'>
        <div className='w-full flex justify-between'>
          <div className='relative aspect-square p-4 border-2 border-blue-800 rounded-full flex justify-center items-center'>
            <span className='absolute text-sm font-semibold'>{index + 1}</span>
          </div>
          {/* <TaskItemEditButton taskItem={task} /> */}
          <TaskItemMenuButton />
        </div>
        <IconContext.Provider value={{ size: '5em' }}>
          <BiLogoFlutter />
        </IconContext.Provider>
        <div className='flex flex-col justify-between items-center gap-4'>
          <h1 className='text-lg font-semibold text-black'>{task.title}</h1>
          <div className='flex flex-col items-start gap-2'>
            <p className='text-sm border-b border-black'>学習予定期間</p>
            <h2 className='text-sm font-semibold text-gray-400'>
              {task.startDate.toLocaleDateString()} ~{' '}
              {task.endDate.toLocaleDateString()}
            </h2>
          </div>
        </div>
        <p className='text-sm font-normal text-black'>{task.content}</p>
      </section>
      <section className='flex flex-row justify-between items-center gap-4'>
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
      </section>
    </section>
  )
}
