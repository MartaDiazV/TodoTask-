interface DashboardProps {
  taskCount: number
  onCreateTask: () => void
}

export function Dashboard({ taskCount, onCreateTask }: DashboardProps) {
  return (
    <header className="app-header">
      <div>
        <p className="eyebrow">TABLERO PERSONAL</p>
        <h1>TodoTask</h1>
        <p className="header-subtitle">
          {taskCount === 1 ? '1 tarea organizada' : `${taskCount} tareas organizadas`}
        </p>
      </div>
      <button className="primary-button" type="button" onClick={onCreateTask}>
        <span aria-hidden="true">+</span> Nueva tarea
      </button>
    </header>
  )
}
