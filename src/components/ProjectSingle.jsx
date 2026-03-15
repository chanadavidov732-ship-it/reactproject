import React, { useEffect, useState } from 'react'
import { InputNumber } from 'primereact/inputnumber'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { Dropdown } from 'primereact/dropdown'
import { Card } from 'primereact/card'
import { Tag } from 'primereact/tag'
import { Button } from 'primereact/button'
import { useDispatch, useSelector } from 'react-redux'
import { Divider } from 'primereact/divider'
import { addTask, updateTask, deleteTask } from '../store/ProjectsSlice'
import { useLocation } from 'react-router-dom'
import ShowProjectCard from './ShowProjectCard'
import { getSeverity, changeStatuses } from '../utils/constants'

const ProjectSingle = () => {
    const location = useLocation()
    const dispatch = useDispatch()

    const idOfProjectSignle = location.state
    const projectTasks = useSelector(state => state.ProjectsSlice.list.find(p => p.id === idOfProjectSignle)?.tasks || [])
    const todoTasks = projectTasks.filter(t => t.Tstatus === 'toDo')
    const inProgressTasks = projectTasks.filter(t => t.Tstatus === 'inProgress')
    const doneTasks = projectTasks.filter(t => t.Tstatus === 'Done')
    const [statuses] = useState(['High', 'Medium', 'Low'])

    const [nid, setNid] = useState(1)

    const statusBodyTemplate = (rowData) => {
        return <Tag value={rowData.inventoryStatus} severity={getSeverity(rowData.inventoryStatus)}></Tag>
    }

    const onRowEditComplete = (e) => {
        dispatch(updateTask({
            idproj: idOfProjectSignle, Tid: e.newData.Tid, Ttitle: e.newData.Ttitle
            , Tdescription: e.newData.Tdescription, Tpriority: e.newData.Tpriority, TdueDate: e.newData.TdueDate
        }))
    }

    const dateBodyTemplate = (rowData) => {
        const date = new Date(rowData.TdueDate);
        return date.toLocaleDateString('he-IL')
    }

    const allowEdit = (rowData) => {
        return rowData.name !== 'Blue Band';
    }


    const deleted = (rowData) => {
        dispatch(deleteTask({ idproj: idOfProjectSignle, idtask: rowData.Tid }))
    }

    const newid = () => {
        setNid(nid + 1)
        return nid.toString()
    }

    const addNewTask = (Tstatus) => {
        dispatch(addTask({ idproj: idOfProjectSignle, Tid: newid, status: Tstatus }))
    }

    return (
        <div className="grid grid-nogutter w-full" style={{ minHeight: '100vh' }}>

            <ShowProjectCard whatTasksToShow={todoTasks} typeCurrentStatus={'toDo'} onRowEditComplete={onRowEditComplete}
                statusBodyTemplate={statusBodyTemplate} dateBodyTemplate={dateBodyTemplate}
                idOfProjectSignle={idOfProjectSignle} allowEdit={allowEdit} addNewTask={addNewTask} deleted={deleted} statuses={statuses} />

            <ShowProjectCard whatTasksToShow={inProgressTasks} typeCurrentStatus={'inProgress'} onRowEditComplete={onRowEditComplete}
                statusBodyTemplate={statusBodyTemplate} dateBodyTemplate={dateBodyTemplate}
                idOfProjectSignle={idOfProjectSignle} allowEdit={allowEdit} addNewTask={addNewTask} deleted={deleted} statuses={statuses} />

            <ShowProjectCard whatTasksToShow={doneTasks} typeCurrentStatus={'Done'} onRowEditComplete={onRowEditComplete}
                statusBodyTemplate={statusBodyTemplate} dateBodyTemplate={dateBodyTemplate}
                idOfProjectSignle={idOfProjectSignle} allowEdit={allowEdit} addNewTask={addNewTask} deleted={deleted} statuses={statuses} />

        </div>
    )
}


export default ProjectSingle