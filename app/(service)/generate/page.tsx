'use client'

import { useState } from 'react'

import GenerateForm from '@/components/GeneratePage/GenerateForm/GenerrateForm'
import GenerateList from '@/components/GeneratePage/GenerateList/GenerateList'
import NonGenerate from '@/components/GeneratePage/NonGenerate/NonGenerate'
import { Task } from '@/model/Task'
import { TaskItem } from '@/model/TaskItem'

export default function TopPage() {
  const [task, setTask] = useState<Task | null>(null)
  const [taskItems, setTaskItems] = useState<TaskItem[]>([])

  if (taskItems.length > 0) {
    return (
      <>
        <div className='w-full px-8 pt-16 pb-8 bg-white rounded-lg shadow-lg'>
          <GenerateForm
            setTaskItems={(taskItems: TaskItem[]) => setTaskItems(taskItems)}
            setTask={(task: Task) => setTask(task)}
          />
        </div>
        <GenerateList taskItems={taskItems} task={task!} />
      </>
    )
  } else {
    return (
      <>
        <div className='w-full px-8 pt-16 pb-8 bg-white rounded-lg shadow-lg'>
          <GenerateForm
            setTaskItems={(taskItems: TaskItem[]) => setTaskItems(taskItems)}
            setTask={(task: Task) => setTask(task)}
          />
        </div>
        <NonGenerate />
      </>
    )
  }
}
