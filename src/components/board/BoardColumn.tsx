import { useState, type DragEvent } from 'react'
import type { BoardColumn as BoardColumnData } from '../../constants/board'
import type { Task, TaskStatus } from '../../types/task'
import { TaskCard } from '../tasks/TaskCard'

interface BoardColumnProps {
  column: BoardColumnData
  tasks: Task[]
  onMoveTask: (taskId: string, status: TaskStatus) => void
  onEditTask: (task: Task) => void
  onDeleteTask: (taskId: string) => void
}

export function BoardColumn({ column, tasks, onMoveTask, onEditTask, onDeleteTask }: BoardColumnProps) {
  const [isDropTarget, setIsDropTarget] = useState(false)

  const handleDragOver = (event: DragEvent<HTMLElement>) => {
    event.preventDefault()
    event.dataTransfer.dropEffect = 'move'
    setIsDropTarget(true)
  }

  const handleDrop = (event: DragEvent<HTMLElement>) => {
    event.preventDefault()
    const taskId = event.dataTransfer.getData('text/plain')
    if (taskId) onMoveTask(taskId, column.id)
    setIsDropTarget(false)
  }

  return (
    <section
      className={`board-column${isDropTarget ? ' board-column--drop-target' : ''}`}
      aria-label={`${column.label}: ${column.description}`}
      onDragOver={handleDragOver}
      onDragEnter={() => setIsDropTarget(true)}
      onDragLeave={() => setIsDropTarget(false)}
      onDrop={handleDrop}
    >
      <header className="column-header">
        <div>
          <h2>{column.label}</h2>
          <p>{column.description}</p>
        </div>
        <span className="task-count" aria-label={`${tasks.length} tareas`}>
          {tasks.length}
        </span>
      </header>
      <div className="task-list">
        {tasks.length ? (
          tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onMoveTask={onMoveTask}
              onEditTask={onEditTask}
              onDeleteTask={onDeleteTask}
            />
          ))
        ) : (
          <p className="empty-column">Arrastra una tarea aquí</p>
        )}
      </div>
    </section>
  )
}
