
import { useState } from 'react'
import {
  Link,
  useLocation,
  useNavigate,
} from 'react-router-dom'

import { loginUser } from '../../services/authService'

interface LoginLocationState {
  successMessage?: string
}

export function Login() {
  const navigate = useNavigate()
  const location = useLocation()

  const state =
    location.state as LoginLocationState | null

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [error, setError] = useState('')

  const [successMessage, setSuccessMessage] = useState(
    state?.successMessage ?? ''
  )

  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault()

    setError('')
    setSuccessMessage('')

    if (!email.trim()) {
      setError('Ingresa tu correo electrónico.')
      return
    }

    if (!password) {
      setError('Ingresa tu contraseña.')
      return
    }

    const result = loginUser(
      email,
      password
    )

    if (!result.success) {
      setError(result.message)
      return
    }

    navigate('/')
  }

  return (
    <section className="auth-page">
      <div className="auth-card">

        <div className="auth-header">
          <div className="auth-logo">
            ✓
          </div>

          <h1>Iniciar sesión</h1>

          <p>
            Ingresa a tu cuenta de TodoTask
          </p>
        </div>

        {successMessage && (
          <div className="auth-message auth-success">
            {successMessage}
          </div>
        )}

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
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="auth-button"
          >
            Iniciar sesión
          </button>

        </form>

        <div className="auth-footer">
          <span>
            ¿No tienes una cuenta?
          </span>

          <Link to="/register">
            Registrarse
          </Link>
        </div>

      </div>
    </section>
  )
}