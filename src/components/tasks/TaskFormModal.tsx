import { useId, useState, type FormEvent } from 'react'
import type { Task, TaskValues } from '../../types/task'

interface TaskFormModalProps {
  task: Task | null
  onClose: () => void
  onSubmit: (values: TaskValues) => void
}

export function TaskFormModal({ task, onClose, onSubmit }: TaskFormModalProps) {
  const titleId = useId()
  const descriptionId = useId()
  const [title, setTitle] = useState(task?.title ?? '')
  const [description, setDescription] = useState(task?.description ?? '')
  const [error, setError] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!title.trim()) {
      setError('El título es obligatorio.')
      return
    }
    onSubmit({ title, description })
  }

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={onClose}>
      <section
        className="task-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="task-form-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="modal-header">
          <div>
            <p className="eyebrow">{task ? 'ACTUALIZAR TAREA' : 'NUEVA TAREA'}</p>
            <h2 id="task-form-title">{task ? 'Editar tarea' : 'Crear tarea'}</h2>
          </div>
          <button type="button" className="icon-button" onClick={onClose} aria-label="Cerrar formulario">×</button>
        </div>
        <form onSubmit={handleSubmit}>
          <label htmlFor={titleId}>Título</label>
          <input
            id={titleId}
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            aria-invalid={Boolean(error)}
            aria-describedby={error ? `${titleId}-error` : undefined}
            autoFocus
          />
          {error && <p className="form-error" id={`${titleId}-error`}>{error}</p>}
          <label htmlFor={descriptionId}>Descripción <span>(opcional)</span></label>
          <textarea id={descriptionId} value={description} onChange={(event) => setDescription(event.target.value)} rows={5} />
          <div className="form-actions">
            <button className="secondary-button" type="button" onClick={onClose}>Cancelar</button>
            <button className="primary-button" type="submit">{task ? 'Guardar cambios' : 'Crear tarea'}</button>
          </div>
        </form>
      </section>
    </div>
  )
}
