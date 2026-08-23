import { useEffect, useState } from 'react'
import { loadTasks, saveTasks } from '../services/taskStorage'
import type { Task, TaskStatus, TaskValues } from '../types/task'

const sortByLastUpdate = (tasks: Task[]) =>
  [...tasks].sort((first, second) => second.updatedAt.localeCompare(first.updatedAt))

const createId = () =>
  typeof crypto.randomUUID === 'function'
    ? crypto.randomUUID()
    : `${Date.now()}-${Math.random().toString(16).slice(2)}`

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>(() => sortByLastUpdate(loadTasks()))

  useEffect(() => {
    saveTasks(tasks)
  }, [tasks])

  const createTask = (values: TaskValues) => {
    const timestamp = new Date().toISOString()
    const task: Task = {
      id: createId(),
      title: values.title.trim(),
      description: values.description.trim(),
      status: 'backlog',
      createdAt: timestamp,
      updatedAt: timestamp,
    }
    setTasks((currentTasks) => sortByLastUpdate([...currentTasks, task]))
  }

  const updateTask = (taskId: string, values: TaskValues) => {
    const timestamp = new Date().toISOString()
    setTasks((currentTasks) =>
      sortByLastUpdate(
        currentTasks.map((task) =>
          task.id === taskId
            ? { ...task, title: values.title.trim(), description: values.description.trim(), updatedAt: timestamp }
            : task,
        ),
      ),
    )
  }

  const deleteTask = (taskId: string) => {
    setTasks((currentTasks) => currentTasks.filter((task) => task.id !== taskId))
  }

  const moveTask = (taskId: string, status: TaskStatus) => {
    const timestamp = new Date().toISOString()
    setTasks((currentTasks) =>
      sortByLastUpdate(
        currentTasks.map((task) => (task.id === taskId ? { ...task, status, updatedAt: timestamp } : task)),
      ),
    )
  }

  return { tasks, createTask, updateTask, deleteTask, moveTask }
}
