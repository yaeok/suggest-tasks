'use client'

import Loading from '@/components/Loading/Loading'
import { TaskItem } from '@/model/TaskItem'
import { GetTaskItemsUseCase } from '@/usercase/get_task_items_use_case/get_task_items_use_case'
import { useEffect, useState } from 'react'

type TaskDetailPageProps = {
  params: { slug: string }
}

export default function TaskDetailPage(props: TaskDetailPageProps) {
  const { slug } = props.params
  const [taskItems, setTaskItems] = useState<TaskItem[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  useEffect(() => {
    const fetch = async () => {
      setTimeout(async () => {
        const usecase = new GetTaskItemsUseCase()

        const taskItems = await usecase.getTaskItems({ taskId: slug })
        setTaskItems(taskItems)
        setLoading(false)
      }, 1000)
    }
    fetch()
  }, [slug])

  if (loading) {
    return <Loading message='データ取得中...' />
  }
  return (
    <div>
      <h1>TaskDetailPage</h1>
      <p>slug: {slug}</p>
      {taskItems.map((taskItem: TaskItem) => {
        return (
          <div key={taskItem.itemId}>
            <p>{taskItem.title}</p>
            <p>{taskItem.content}</p>
          </div>
        )
      })}
    </div>
  )
}
