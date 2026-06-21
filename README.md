# Project Management System

A modern Project Management application built with React, Redux Toolkit, and PrimeReact.

## Overview

This application enables users to manage projects and tasks through an intuitive and responsive interface. Users can create projects, update project details, organize tasks by status, and track progress using a Kanban-style workflow.

The project was developed as part of a Full Stack Software Engineering training program and demonstrates practical use of React ecosystem technologies, state management, and component-based architecture.

---

## Features

### Authentication

* Login dialog with form validation.
* Redux-based authentication state management.

### Project Management

* Create new projects.
* Update existing project details.
* Delete projects.
* View projects in Grid or List layouts.

### Task Management

* Add tasks to projects.
* Edit task information directly within tables.
* Delete tasks.
* Change task status between:

  * To Do
  * In Progress
  * Done

### User Experience

* Responsive UI using PrimeReact components.
* Inline editing capabilities.
* Modern card and table layouts.
* Form validation with React Hook Form.

---

## Technologies Used

### Frontend

* React
* React Router
* Redux Toolkit
* React Hook Form
* PrimeReact
* PrimeFlex

### State Management

* Redux Toolkit Slices
* Centralized Store Architecture

### UI Components

* DataTable
* Dialog
* Card
* Dropdown
* Buttons
* Tags

---

## Architecture

The application follows a component-based architecture and uses Redux Toolkit for centralized state management.

Main modules:

* Authentication Module
* Projects Module
* Tasks Module
* Shared Components
* Redux Store

---

## Project Structure

```text
src/
│
├── components/
│   ├── Home.jsx
│   ├── Projects.jsx
│   ├── ProjectSingle.jsx
│   ├── LoginDialog.jsx
│   ├── UpdateProject.jsx
│   ├── NewProject.jsx
│   └── ...
│
├── store/
│   ├── LoginSlice.js
│   ├── ProjectsSlice.js
│
├── utils/
│   └── constants.js
│
└── App.jsx
```

---

## Key Concepts Demonstrated

* React Functional Components
* Custom Component Composition
* State Management with Redux Toolkit
* CRUD Operations
* Form Validation
* Routing and Navigation
* Dynamic Rendering
* Inline Data Editing
* Reusable UI Components

---

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Install dependencies:

```bash
npm install
```

Run the application:

```bash
npm run dev
```

---

## Future Improvements

* Backend integration with ASP.NET Core API.
* JWT authentication.
* Database persistence.
* Search and filtering capabilities.
* Drag & Drop task management.
* User roles and permissions.
* Dark Mode support.

---

## Author

Chana Davidov

Software Engineering Graduate specializing in Full Stack Development, modern web technologies, APIs, databases, and AI-based solutions.
