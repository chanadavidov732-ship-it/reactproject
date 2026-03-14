import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  list: [
    {
      id: "1",
      name: "פרויקט לדוגמה",
      description: " המושלם שלי שאין כמונו בריאקט",
      createdAt: "2024-05-20",
      tasks: [
        {
          Tid: "t1",
          Ttitle: "משימה ראשונה",
          Tdescription: "פירוט",
          Tstatus: "inProgress", // todo, inProgress, done
          Tpriority: "Medium",
          TdueDate: "2024-06-01"
        },
        {
          Tid: "t1",
          Ttitle: "משימה שניה",
          Tdescription: "פירוט ארוך",
          Tstatus: "toDo",
          Tpriority: "Medium",
          TdueDate: "2024-06-01"
        }
      ]
    },
  ]
}

const ProjectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    add: (state, action) => {
      const new1 = {
        ...action.payload, createdAt: new Date().toLocaleDateString('he-IL'), tasks: []
      }
      state.list.push(new1)
    },

    addTask: (state, action) => {
      const new1 = {
        //another id somehow
        Tid: '9999', Ttitle: '', Tdescription: '', Tstatus: action.payload.status, Tpriority: '', TdueDate: ''
      }
      const projfind = state.list.find(p => p.id === action.payload.idproj)
      projfind.tasks.push(new1)
    },

    deleteP: (state, action) => {
      state.list = state.list.filter(project => project.id !== action.payload)
    },

    deleteTask: (state, action) => {
      const projfind = state.list.find(p => p.id === action.payload.idproj)
      projfind.tasks = projfind.tasks.filter(t => t.Tid !== action.payload.idtask)
    },

    updateStatus: (state, action) => {
      const projfind = state.list.find(p => p.id === action.payload.idproj)
      const taskfind = projfind.tasks.find(t => t.Tid === action.payload.Tid)
      taskfind.Tstatus=action.payload.Tstatus
    },

    update: (state, action) => {
      const projfind = state.list.find(p => p.id === action.payload.id)
      if (action.payload.name !== undefined)
        projfind.name = action.payload.name
      if (action.payload.description !== undefined)
        projfind.description = action.payload.description
    },

    updateTask: (state, action) => {

      const projfind = state.list.find(p => p.id === action.payload.idproj)
      const taskfind = projfind.tasks.find(t => t.Tid === action.payload.Tid)

      if (action.payload.Ttitle !== undefined)
        taskfind.Ttitle = action.payload.Ttitle

      if (action.payload.Tdescription !== undefined)
        taskfind.Tdescription = action.payload.Tdescription

      if (action.payload.Tpriority !== undefined)
        taskfind.Tpriority = action.payload.Tpriority

      if (action.payload.TdueDate !== undefined)
        taskfind.TdueDate = action.payload.TdueDate
    }

  }
})

export const { add, deleteP, update, addTask,updateTask,deleteTask ,updateStatus} = ProjectsSlice.actions

export default ProjectsSlice.reducer