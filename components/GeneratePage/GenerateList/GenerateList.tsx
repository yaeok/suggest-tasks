import GenerateListItem from '@/components/GeneratePage/GenerateList/GenerateListItem/GenerateListItem'
import SaveButton from '@/components/GeneratePage/SaveButton/SaveButton'
import { Task } from '@/model/Task'
import { TaskItem } from '@/model/TaskItem'

type GenerateListProps = {
  task: Task
  taskItems: TaskItem[]
}

export default function GenerateList({ taskItems, task }: GenerateListProps) {
  return (
    <section className='w-full py-8 flex flex-col items-center gap-4'>
      <SaveButton taskItems={taskItems} task={task} />
      <div className='w-full py-4 grid grid-cols-3 gap-4'>
        {taskItems.map((task: TaskItem, index: number) => (
          <GenerateListItem task={task} index={index} key={index} />
        ))}
      </div>
      <SaveButton taskItems={taskItems} task={task} />
    </section>
  )
}
