import type { TaskStatus } from '../types/task'

export interface BoardColumn {
  id: TaskStatus
  label: string
  description: string
}

export const boardColumns: BoardColumn[] = [
  { id: 'backlog', label: 'Backlog', description: 'Pendiente por planificar' },
  { id: 'in_progress', label: 'En curso', description: 'Trabajo activo' },
  { id: 'review', label: 'Revisar', description: 'Pendiente de revisión' },
  { id: 'done', label: 'Hecho', description: 'Trabajo completado' },
]
