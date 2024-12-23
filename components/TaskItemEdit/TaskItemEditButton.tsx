'use client'

import { useState } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'

import TaskItemEditModal from '@/components/TaskItemEdit/TaskItemEditModal'
import { TaskItem } from '@/model/TaskItem'

type TaskItemEditButtonProps = {
  taskItem: TaskItem
}

export default function TaskItemEditButton({
  taskItem,
}: TaskItemEditButtonProps) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <button onClick={() => setIsOpen(true)}>
        <RxHamburgerMenu />
      </button>
      <TaskItemEditModal
        taskItem={taskItem}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  )
}
