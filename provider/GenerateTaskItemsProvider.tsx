'use client'

import { createContext, useContext, useState } from 'react'

import { TaskItem } from '@/model/TaskItem'

type TaskItemsContextType = {
  taskItems: TaskItem[]
  setTaskItems: React.Dispatch<React.SetStateAction<TaskItem[]>>
  updateTaskItemByPriority: (taskItem: TaskItem) => void
}

const TaskItemsContext = createContext<TaskItemsContextType>({
  taskItems: [],
  setTaskItems: () => {},
  updateTaskItemByPriority: () => {},
})

export const useTaskItemsContext = () => useContext(TaskItemsContext)

export const GenerateTaskItemsProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [taskItems, setTaskItems] = useState<TaskItem[]>([])

  const updateTaskItemByPriority = (taskItem: TaskItem) => {
    const newTaskItems = taskItems.map((item) => {
      if (item.priority === taskItem.priority) {
        return taskItem
      }
      return item
    })
    setTaskItems(newTaskItems)
  }

  return (
    <TaskItemsContext.Provider
      value={{ taskItems, setTaskItems, updateTaskItemByPriority }}
    >
      {children}
    </TaskItemsContext.Provider>
  )
}
