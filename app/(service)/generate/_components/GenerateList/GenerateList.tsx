import { Task } from '@/model/Task'
import { TaskItem } from '@/model/TaskItem'

import SaveButton from '../SaveButton/SaveButton'
import GenerateListItem from './GenerateListItem/GenerateListItem'

type GenerateListProps = {
  task: Task
  taskItems: TaskItem[]
}

export default function GenerateList({ taskItems, task }: GenerateListProps) {
  return (
    <section className='w-full py-8 flex flex-col items-center gap-4'>
      <SaveButton taskItems={taskItems} task={task} />
      <div className='w-full grid grid-cols-2 gap-4'>
        {taskItems.map((task: TaskItem, index: number) => (
          <GenerateListItem task={task} index={index} key={index} />
        ))}
      </div>
      <SaveButton taskItems={taskItems} task={task} />
    </section>
  )
}
