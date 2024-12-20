'use client'

import { useState } from 'react'

import GenerateForm from '@/components/GeneratePage/GenerateForm/GenerateForm'
import GenerateList from '@/components/GeneratePage/GenerateList/GenerateList'
import NonGenerate from '@/components/GeneratePage/NonGenerate/NonGenerate'
import Loading from '@/components/Loading/Loading'
import ErrorMessageModal from '@/components/Modal/ErrorMessage/ErrorMessageModal'
import { Task } from '@/model/Task'
import { useTaskItemsContext } from '@/provider/GenerateTaskItemsProvider'

export default function GeneratePage() {
  const [task, setTask] = useState<Task | null>(null)
  const taskItemsContext = useTaskItemsContext()
  const [loading, setLoading] = useState<boolean>(false)
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('')

  if (loading) {
    return <Loading message='タスク生成中...' />
  }

  return (
    <section className='w-full flex flex-col gap-2 items-center'>
      <div className='w-full px-8 pt-16 pb-8 bg-white rounded-lg shadow-lg'>
        <GenerateForm
          setTask={(task: Task) => setTask(task)}
          setLoading={(loading: boolean) => setLoading(loading)}
          openModal={() => setIsOpen(true)}
          setMessage={(message: string) => setMessage(message)}
        />
      </div>

      {taskItemsContext.taskItems.length > 0 ? (
        <GenerateList taskItems={taskItemsContext.taskItems} task={task!} />
      ) : (
        <NonGenerate />
      )}

      <ErrorMessageModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        message={message}
      />
    </section>
  )
}
