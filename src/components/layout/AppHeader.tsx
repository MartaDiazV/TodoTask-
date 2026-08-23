
import { Link, useNavigate } from 'react-router-dom'
import {
  getCurrentUser,
  logoutUser,
} from '../../services/authService'

export function AppHeader() {
  const navigate = useNavigate()

  const user = getCurrentUser()

  const handleLogout = () => {
    logoutUser()
    navigate('/login')
  }

  return (
    <header className="navigation-header">
      <div className="navigation-container">

        <Link
          to="/"
          className="navigation-logo"
        >
          <span className="logo-icon">
            ✓
          </span>

          <span>
            TodoTask
          </span>
        </Link>

        <nav className="navigation-menu">

          <Link
            to="/"
            className="navigation-link"
          >
            Inicio
          </Link>

          {user ? (
            <>
              <span className="user-name">
                Hola, {user.name}
              </span>

              <button
                type="button"
                className="logout-button"
                onClick={handleLogout}
              >
                Cerrar sesión
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="navigation-link"
              >
                Iniciar sesión
              </Link>

              <Link
                to="/register"
                className="navigation-register"
              >
                Registrarse
              </Link>
            </>
          )}

        </nav>

      </div>
    </header>
  )
}