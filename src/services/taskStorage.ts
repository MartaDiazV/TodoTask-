import { taskStatuses, type Task } from '../types/task'

const storageKey = 'todotask.tasks.v1'

const isTask = (value: unknown): value is Task => {
  if (!value || typeof value !== 'object') return false

  const candidate = value as Record<string, unknown>
  return (
    typeof candidate.id === 'string' &&
    typeof candidate.title === 'string' &&
    typeof candidate.description === 'string' &&
    typeof candidate.createdAt === 'string' &&
    typeof candidate.updatedAt === 'string' &&
    taskStatuses.includes(candidate.status as Task['status'])
  )
}

export function loadTasks(): Task[] {
  try {
    const rawTasks = window.localStorage.getItem(storageKey)
    if (!rawTasks) return []

    const parsedTasks: unknown = JSON.parse(rawTasks)
    return Array.isArray(parsedTasks) && parsedTasks.every(isTask) ? parsedTasks : []
  } catch {
    return []
  }
}

export function saveTasks(tasks: Task[]): void {
  try {
    window.localStorage.setItem(storageKey, JSON.stringify(tasks))
  } catch {
    // The application stays usable if browser storage is unavailable or full.
  }
}
