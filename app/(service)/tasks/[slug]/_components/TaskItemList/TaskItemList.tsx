import { TaskItem } from '@/model/TaskItem'

import TaskItemListItem from '../TaskItemListItem/TaskItemListItem'

type TaskItemListProps = {
  taskItems: TaskItem[]
}

export default function TaskItemList({ taskItems }: TaskItemListProps) {
  return (
    <div className='w-full grid grid-cols-2 gap-4'>
      {taskItems.map((task: TaskItem, index: number) => (
        <TaskItemListItem task={task} index={index} key={index} />
      ))}
    </div>
  )
}
