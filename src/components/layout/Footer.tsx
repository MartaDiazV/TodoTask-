
export function Footer() {
  return (
    <footer className="app-footer">
      <div className="footer-container">

        <div className="footer-brand">
          <div className="footer-logo">
            <span className="logo-icon">✓</span>
            <span>TodoTask</span>
          </div>

          <p>
            Organiza tus tareas. Simplifica tu día.
          </p>
        </div>

        <div className="footer-links">
          <a href="/privacy">
            Privacidad
          </a>

          <a href="/terms">
            Términos
          </a>

          <a href="/contact">
            Contacto
          </a>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © 2026 TodoTask. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}