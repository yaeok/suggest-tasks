'use client'

import { useEffect, useState } from 'react'

import Loading from '@/components/Loading/Loading'
import { TaskItem } from '@/model/TaskItem'
import { GetTaskItemsUseCase } from '@/usercase/get_task_items_use_case/get_task_items_use_case'

import TaskItemList from './_components/TaskItemList/TaskItemList'

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

        const result = await usecase.execute({ taskId: slug })
        const sortedTaskItems = result.taskItems.sort((a, b) => {
          return a.priority - b.priority
        })
        setTaskItems(sortedTaskItems)
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
      <TaskItemList taskItems={taskItems} />
    </div>
  )
}
