
import { useState } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'

import { Board } from './components/board/Board'
import { Dashboard } from './components/layout/DashboardHeader'
import { AppHeader } from './components/layout/AppHeader'
import { Footer } from './components/layout/Footer'
import { TaskFormModal } from './components/tasks/TaskFormModal'
import { ProtectedRoute } from './pages/auth/ProtectedRoute'

import { Login } from './pages/auth/login'
import { Register } from './pages/auth/Register'


import { useTasks } from './hooks/useTasks'
import type { Task } from './types/task'

import './App.css'


function DashboardPage() {
  const {
    tasks,
    createTask,
    updateTask,
    deleteTask,
    moveTask,
  } = useTasks()

  const [isFormOpen, setIsFormOpen] = useState(false)
  const [taskToEdit, setTaskToEdit] =
    useState<Task | null>(null)

  const openCreateForm = () => {
    setTaskToEdit(null)
    setIsFormOpen(true)
  }

  const openEditForm = (task: Task) => {
    setTaskToEdit(task)
    setIsFormOpen(true)
  }

  const closeForm = () => {
    setIsFormOpen(false)
    setTaskToEdit(null)
  }

  return (
    <>
      <AppHeader />

      <main className="app-main">

        <div className="app-shell">

          <Dashboard
            taskCount={tasks.length}
            onCreateTask={openCreateForm}
          />

          <Board
            tasks={tasks}
            onMoveTask={moveTask}
            onEditTask={openEditForm}
            onDeleteTask={deleteTask}
          />

        </div>

      </main>

      <Footer />

      {isFormOpen && (
        <TaskFormModal
          task={taskToEdit}
          onClose={closeForm}
          onSubmit={(values) => {
            if (taskToEdit) {
              updateTask(
                taskToEdit.id,
                values
              )
            } else {
              createTask(values)
            }

            closeForm()
          }}
        />
      )}
    </>
  )
}


function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/login"
          element={
            <>
              <AppHeader />

              <main className="app-main">
                <Login />
              </main>

              <Footer />
            </>
          }
        />

        <Route
          path="/register"
          element={
            <>
              <AppHeader />

              <main className="app-main">
                <Register />
              </main>

              <Footer />
            </>
          }
        />

      </Routes>

    </BrowserRouter>
  )
}

export default App