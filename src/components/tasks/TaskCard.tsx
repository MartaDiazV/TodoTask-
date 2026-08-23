import type { ChangeEvent, DragEvent } from 'react'
import { boardColumns } from '../../constants/board'
import type { Task, TaskStatus } from '../../types/task'

interface TaskCardProps {
  task: Task
  onMoveTask: (taskId: string, status: TaskStatus) => void
  onEditTask: (task: Task) => void
  onDeleteTask: (taskId: string) => void
}

export function TaskCard({ task, onMoveTask, onEditTask, onDeleteTask }: TaskCardProps) {
  const handleStatusChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onMoveTask(task.id, event.target.value as TaskStatus)
  }

  const handleDragStart = (event: DragEvent<HTMLElement>) => {
    event.dataTransfer.effectAllowed = 'move'
    event.dataTransfer.setData('text/plain', task.id)
  }

  const confirmDeletion = () => {
    if (window.confirm(`¿Eliminar la tarea “${task.title}”?`)) onDeleteTask(task.id)
  }

  return (
    <article className="task-card" draggable onDragStart={handleDragStart}>
      <div className="task-card__topline">
        <span className="drag-handle" aria-hidden="true">⠿</span>
        <div className="card-actions">
          <button type="button" onClick={() => onEditTask(task)} aria-label={`Editar ${task.title}`}>
            Editar
          </button>
          <button type="button" className="delete-button" onClick={confirmDeletion} aria-label={`Eliminar ${task.title}`}>
            Eliminar
          </button>
        </div>
      </div>
      <h3>{task.title}</h3>
      {task.description && <p className="task-description">{task.description}</p>}
      <label className="status-select">
        <span>Estado</span>
        <select value={task.status} onChange={handleStatusChange} aria-label={`Estado de ${task.title}`}>
          {boardColumns.map((column) => (
            <option key={column.id} value={column.id}>{column.label}</option>
          ))}
        </select>
      </label>
    </article>
  )
}
