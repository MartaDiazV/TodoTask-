
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { registerUser } from '../../services/authService'

export function Register() {
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const [error, setError] = useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    setError('')

    if (!name.trim()) {
      setError('Ingresa tu nombre.')
      return
    }

    if (!email.trim()) {
      setError('Ingresa tu correo electrónico.')
      return
    }

    if (!password) {
      setError('Ingresa una contraseña.')
      return
    }

    if (password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres.')
      return
    }

    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden.')
      return
    }

    const result = registerUser(
      name,
      email,
      password
    )

    if (!result.success) {
      setError(result.message)
      return
    }

    navigate('/login', {
      state: {
        successMessage: result.message,
      },
    })
  }

  return (
    <section className="auth-page">
      <div className="auth-card">

        <div className="auth-header">
          <div className="auth-logo">
            ✓
          </div>

          <h1>Crear cuenta</h1>

          <p>
            Regístrate para comenzar a organizar tus tareas
          </p>
        </div>

        {error && (
          <div className="auth-message auth-error">
            {error}
          </div>
        )}

        <form
          className="auth-form"
          onSubmit={handleSubmit}
        >

          <div className="form-group">
            <label htmlFor="name">
              Nombre
            </label>

            <input
              id="name"
              type="text"
              value={name}
              onChange={(event) =>
                setName(event.target.value)
              }
              placeholder="Tu nombre"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">
              Correo electrónico
            </label>

            <input
              id="email"
              type="email"
              value={email}
              onChange={(event) =>
                setEmail(event.target.value)
              }
              placeholder="correo@ejemplo.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">
              Contraseña
            </label>

            <input
              id="password"
              type="password"
              value={password}
              onChange={(event) =>
                setPassword(event.target.value)
              }
              placeholder="Mínimo 6 caracteres"
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">
              Confirmar contraseña
            </label>

            <input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(event) =>
                setConfirmPassword(event.target.value)
              }
              placeholder="Repite tu contraseña"
            />
          </div>

          <button
            type="submit"
            className="auth-button"
          >
            Crear cuenta
          </button>

        </form>

        <div className="auth-footer">
          <span>
            ¿Ya tienes una cuenta?
          </span>

          <Link to="/login">
            Iniciar sesión
          </Link>
        </div>

      </div>
    </section>
  )
}