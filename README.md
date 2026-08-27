# TodoTask

TodoTask es una aplicación web de gestión de tareas desarrollada con **React, TypeScript, Vite y CSS**.

El objetivo del proyecto es permitir al usuario crear, visualizar, modificar, completar y eliminar tareas de manera sencilla, manteniendo la información almacenada directamente en el navegador.

## 🚀 Tecnologías utilizadas

* **React** — Desarrollo de la interfaz de usuario.
* **TypeScript** — Tipado estático y mayor seguridad durante el desarrollo.
* **Vite** — Herramienta utilizada para el entorno de desarrollo y compilación.
* **CSS** — Diseño y estilos de la aplicación.
* **LocalStorage** — Persistencia de la información de las tareas en el navegador.

## 💾 Almacenamiento de datos

TodoTask **no utiliza un backend ni una base de datos externa**.

La información de las tareas se almacena directamente en el **LocalStorage del navegador** mediante la API `localStorage`.

Esto permite que:

* Las tareas permanezcan guardadas después de cerrar el navegador.
* No sea necesario utilizar un servidor backend.
* No sea necesaria una base de datos externa.
* La aplicación pueda funcionar completamente desde el frontend.
* Los datos permanezcan almacenados localmente en el dispositivo del usuario.

> **Importante:** los datos almacenados en LocalStorage pertenecen al navegador y dispositivo donde se utiliza la aplicación. Si se elimina el almacenamiento del navegador, los datos guardados también pueden eliminarse.

## 📋 Funcionalidades

TodoTask permite gestionar las tareas mediante las siguientes funcionalidades:

* Crear nuevas tareas.
* Visualizar tareas existentes.
* Editar tareas.
* Marcar tareas como completadas.
* Eliminar tareas.
* Mantener las tareas almacenadas utilizando LocalStorage.
* Recuperar automáticamente las tareas almacenadas al iniciar la aplicación.

## 🏗️ Arquitectura

La aplicación utiliza una arquitectura **Frontend Only**:

```text
┌─────────────────────────────┐
│          TodoTask           │
│                             │
│       React + TypeScript    │
│                             │
│           Vite              │
│                             │
│            CSS              │
└──────────────┬──────────────┘
               │
               ▼
┌─────────────────────────────┐
│        LocalStorage         │
│                             │
│   Persistencia de tareas    │
└─────────────────────────────┘
```

No existe comunicación con un backend Node.js para almacenar las tareas.

## 📦 Instalación

Clona el repositorio:

```bash
git clone https://github.com/MartaDiazV/TodoTask
```

Ingresa al directorio del proyecto:

```bash
cd todotask
```

Instala las dependencias:

```bash
npm install
```

## ▶️ Ejecutar el proyecto

Para iniciar el entorno de desarrollo:

```bash
npm run dev
```

Luego abre en el navegador la dirección proporcionada por Vite, normalmente:

```text
http://localhost:5173
```

## 🏗️ Compilar para producción

Para generar la versión optimizada para producción:

```bash
npm run build
```

Para probar localmente la versión compilada:

```bash
npm run preview
```

## 📁 Estructura del proyecto

Una estructura aproximada del proyecto es:

```text
todotask/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── types/
│   ├── styles/
│   ├── App.tsx
│   └── main.tsx
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 🔐 Privacidad de los datos

TodoTask no envía las tareas a un servidor externo.

La información se mantiene localmente en el navegador mediante **LocalStorage**, por lo que los datos no se sincronizan automáticamente entre diferentes dispositivos o navegadores.

## 📌 Estado del proyecto

**TodoTask** es un proyecto desarrollado con fines de aprendizaje y práctica en el desarrollo de aplicaciones web modernas utilizando React y TypeScript.

---

### 🛠️ Stack

**React · TypeScript · Vite · CSS · LocalStorage**

**TodoTask — Gestión de tareas directamente desde tu navegador.**
