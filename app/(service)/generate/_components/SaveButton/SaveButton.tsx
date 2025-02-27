import { useRouter } from 'next/navigation'

import { RoutePath } from '@/constants/RoutePath'
import { Task } from '@/model/Task'
import { TaskItem } from '@/model/TaskItem'
import { useAuthContext } from '@/provider/CurrentUserProvider'
import { useGenerateTaskItemContext } from '@/provider/GenerateTaskItemProvider'
import { SaveTaskItemsUseCase } from '@/usercase/save_tasks_use_case/save_tasks_use_case'

type SaveButtonProps = {
  task: Task
  taskItems: TaskItem[]
}

export default function SaveButton({ taskItems, task }: SaveButtonProps) {
  const router = useRouter()
  const currentUser = useAuthContext()?.currentUser
  const generateTaskItemContext = useGenerateTaskItemContext()
  const handleSave = async () => {
    if (!currentUser) {
      return
    }
    const usecase = new SaveTaskItemsUseCase()
    const result = await usecase.execute({
      taskItems: taskItems,
      task: task,
      uid: currentUser.uid,
    })
    if (result) {
      generateTaskItemContext.setTaskItems([])
      router.push(RoutePath.TASKS)
    }
  }
  return (
    <button
      onClick={handleSave}
      className='px-4 py-2 text-white font-semibold bg-blue-500 rounded-full shadow-lg hover:shadow-none hover:translate-y-1 hover:duration-300 transition-all'
    >
      タスクを保存する
    </button>
  )
}
