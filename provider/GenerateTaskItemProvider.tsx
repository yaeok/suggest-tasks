'use client'

import { createContext, useContext, useState } from 'react'

import { TaskItem } from '@/model/TaskItem'

type GenerateTaskItemContextType = {
  taskItems: TaskItem[]
  setTaskItems: React.Dispatch<React.SetStateAction<TaskItem[]>>
  updateTaskItemByPriority: (taskItem: TaskItem) => void
}

const GenerateTaskItemContext = createContext<GenerateTaskItemContextType>({
  taskItems: [],
  setTaskItems: () => {},
  updateTaskItemByPriority: () => {},
})

export const useGenerateTaskItemContext = () =>
  useContext(GenerateTaskItemContext)

export const GenerateTaskItemProvider = ({
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
    <GenerateTaskItemContext.Provider
      value={{ taskItems, setTaskItems, updateTaskItemByPriority }}
    >
      {children}
    </GenerateTaskItemContext.Provider>
  )
}
