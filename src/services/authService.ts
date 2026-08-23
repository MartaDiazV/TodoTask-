
export interface User {
  id: string
  name: string
  email: string
  password: string
}

const USERS_KEY = 'todotask_users'
const SESSION_KEY = 'todotask_session'

const getUsers = (): User[] => {
  const users = localStorage.getItem(USERS_KEY)

  if (!users) {
    return []
  }

  return JSON.parse(users)
}

export const registerUser = (
  name: string,
  email: string,
  password: string
): { success: boolean; message: string } => {
  const users = getUsers()

  const normalizedEmail = email.trim().toLowerCase()

  const existingUser = users.find(
    (user) => user.email === normalizedEmail
  )

  if (existingUser) {
    return {
      success: false,
      message: 'Ya existe una cuenta con este correo electrónico.',
    }
  }

  const newUser: User = {
    id: crypto.randomUUID(),
    name: name.trim(),
    email: normalizedEmail,
    password,
  }

  users.push(newUser)

  localStorage.setItem(
    USERS_KEY,
    JSON.stringify(users)
  )

  return {
    success: true,
    message: 'Cuenta creada correctamente.',
  }
}

export const loginUser = (
  email: string,
  password: string
): { success: boolean; message: string; user?: User } => {
  const users = getUsers()

  const normalizedEmail = email.trim().toLowerCase()

  const user = users.find(
    (user) =>
      user.email === normalizedEmail &&
      user.password === password
  )

  if (!user) {
    return {
      success: false,
      message: 'Correo electrónico o contraseña incorrectos.',
    }
  }

  localStorage.setItem(
    SESSION_KEY,
    JSON.stringify(user)
  )

  return {
    success: true,
    message: 'Inicio de sesión correcto.',
    user,
  }
}

export const logoutUser = (): void => {
  localStorage.removeItem(SESSION_KEY)
}

export const getCurrentUser = (): User | null => {
  const session = localStorage.getItem(SESSION_KEY)

  if (!session) {
    return null
  }

  return JSON.parse(session)
}

export const isAuthenticated = (): boolean => {
  return getCurrentUser() !== null
}