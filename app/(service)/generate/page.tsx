'use client'

import { useState } from 'react'

import GenerateForm from '@/components/GeneratePage/GenerateForm/GenerrateForm'
import GenerateList from '@/components/GeneratePage/GenerateList/GenerateList'
import NonGenerate from '@/components/GeneratePage/NonGenerate/NonGenerate'
import Loading from '@/components/Loading/Loading'
import { Task } from '@/model/Task'
import { TaskItem } from '@/model/TaskItem'

export default function TopPage() {
  const [task, setTask] = useState<Task | null>(null)
  const [taskItems, setTaskItems] = useState<TaskItem[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  if (loading) {
    return <Loading message='タスク生成中...' />
  }

  if (taskItems.length > 0) {
    return (
      <section className='w-full flex flex-col gap-2 items-center'>
        <div className='w-full px-8 pt-16 pb-8 bg-white rounded-lg shadow-lg'>
          <GenerateForm
            setTaskItems={(taskItems: TaskItem[]) => setTaskItems(taskItems)}
            setTask={(task: Task) => setTask(task)}
            setLoading={(loading: boolean) => setLoading(loading)}
          />
        </div>
        <GenerateList taskItems={taskItems} task={task!} />
      </section>
    )
  } else {
    return (
      <section className='w-full flex flex-col gap-2 items-center'>
        <div className='w-full px-8 pt-16 pb-8 bg-white rounded-lg shadow-lg'>
          <GenerateForm
            setTaskItems={(taskItems: TaskItem[]) => setTaskItems(taskItems)}
            setTask={(task: Task) => setTask(task)}
            setLoading={(loading: boolean) => setLoading(loading)}
          />
        </div>
        <NonGenerate />
      </section>
    )
  }
}
