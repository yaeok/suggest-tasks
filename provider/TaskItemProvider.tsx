'use client'

import { createContext, useContext, useState } from 'react'

import { TaskItem } from '@/model/TaskItem'

type TaskItemContextType = {
  taskItems: TaskItem[]
  setTaskItems: React.Dispatch<React.SetStateAction<TaskItem[]>>
  updateTaskItemById: (taskItem: TaskItem) => void
  deleteTaskItemById: (taskId: string) => void
}

const TaskItemContext = createContext<TaskItemContextType>({
  taskItems: [],
  setTaskItems: () => {},
  updateTaskItemById: () => {},
  deleteTaskItemById: () => {},
})

export const useTaskItemContext = () => useContext(TaskItemContext)

export const TaskItemProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [taskItems, setTaskItems] = useState<TaskItem[]>([])

  const updateTaskItemById = (taskItem: TaskItem) => {
    const newTaskItems = taskItems.map((item) => {
      if (item.taskId === taskItem.taskId) {
        return taskItem
      }
      return item
    })
    setTaskItems(newTaskItems)
  }

  const deleteTaskItemById = (taskId: string) => {
    const newTaskItems = taskItems.filter((item) => item.taskId !== taskId)
    setTaskItems(newTaskItems)
  }
  return (
    <TaskItemContext.Provider
      value={{
        taskItems,
        setTaskItems,
        updateTaskItemById,
        deleteTaskItemById,
      }}
    >
      {children}
    </TaskItemContext.Provider>
  )
}
