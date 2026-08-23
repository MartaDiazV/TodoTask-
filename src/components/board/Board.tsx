import { boardColumns } from '../../constants/board'
import type { Task, TaskStatus } from '../../types/task'
import { BoardColumn } from './BoardColumn'

interface BoardProps {
  tasks: Task[]
  onMoveTask: (taskId: string, status: TaskStatus) => void
  onEditTask: (task: Task) => void
  onDeleteTask: (taskId: string) => void
}

export function Board({ tasks, onMoveTask, onEditTask, onDeleteTask }: BoardProps) {
  return (
    <section className="board" aria-label="Tablero de tareas">
      {boardColumns.map((column) => (
        <BoardColumn
          key={column.id}
          column={column}
          tasks={tasks.filter((task) => task.status === column.id)}
          onMoveTask={onMoveTask}
          onEditTask={onEditTask}
          onDeleteTask={onDeleteTask}
        />
      ))}
    </section>
  )
}
