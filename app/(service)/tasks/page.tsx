'use client'
import { useEffect, useState } from 'react'

import Loading from '@/components/Loading/Loading'
import { Task } from '@/model/Task'
import { GetTasksUseCase } from '@/usercase/get_tasks_use_case/get_tasks_use_case'

export default function TaskListPage() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  useEffect(() => {
    const fetchTasks = () => {
      setTimeout(async () => {
        const usecase = new GetTasksUseCase()
        const tasks = await usecase.getTasks()
        setTasks(tasks)
        setLoading(false)
      }, 1000)
    }
    fetchTasks()
  }, [])

  if (loading) {
    return <Loading message='データ取得中...' />
  }

  if (tasks.length > 0) {
    return (
      <div className='w-full flex flex-col gap-2'>
        {tasks.map((task: Task) => {
          return (
            <div
              key={task.taskId}
              className='w-full px-8 pt-16 pb-8 bg-white rounded-lg shadow-lg'
            >
              <h1 className='text-2xl font-bold'>{task.target}</h1>
              <p className='mt-4'>{task.technology}</p>
            </div>
          )
        })}
      </div>
    )
  } else {
    return (
      <div className='w-full px-8 pt-16 pb-8 bg-white rounded-lg shadow-lg'>
        <p>タスクがありません</p>
      </div>
    )
  }
}
