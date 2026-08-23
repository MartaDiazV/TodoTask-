export const taskStatuses = ['backlog', 'in_progress', 'review', 'done'] as const

export type TaskStatus = (typeof taskStatuses)[number]

export interface Task {
  id: string
  title: string
  description: string
  status: TaskStatus
  createdAt: string
  updatedAt: string
}

export interface TaskValues {
  title: string
  description: string
}
