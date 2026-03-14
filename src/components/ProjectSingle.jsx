import React, { useEffect, useState } from 'react'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { InputText } from 'primereact/inputtext'
import { InputNumber } from 'primereact/inputnumber'
import { Dropdown } from 'primereact/dropdown'
import { Tag } from 'primereact/tag'
import { Calendar } from 'primereact/calendar'
import { Card } from 'primereact/card'
import { Button } from 'primereact/button'
import { useDispatch, useSelector } from 'react-redux'
import { Divider } from 'primereact/divider'
import { addTask ,updateTask,deleteTask,updateStatus} from '../store/ProjectsSlice'
import { useLocation } from 'react-router-dom'

const ProjectSingle = () => {
    const location = useLocation()
    const dispatch = useDispatch()

    const idOfProjectSignle = location.state
    const projectTasks = useSelector(state => state.ProjectsSlice.list.find(p=> p.id === idOfProjectSignle)?.tasks || [])
    const todoTasks=projectTasks.filter(t=> t.Tstatus === 'toDo')
    const inProgressTasks=projectTasks.filter(t=> t.Tstatus === 'inProgress')
    const doneTasks=projectTasks.filter(t=> t.Tstatus === 'Done')

    const [statuses] = useState(['High', 'Medium', 'Low'])

    const getSeverity = (value) => {
        switch (value) {
            case 'High':
                return 'danger';
            case 'Medium ':
                return 'warning';
            case 'Low ':
                return 'success';
            default:
                return null;
        }
    }

    const statusEditor = (options) => {
        return (
            <Dropdown
                value={options.value}
                options={statuses}
                onChange={(e) => options.editorCallback(e.value)}
                placeholder="Select a priority"
                itemTemplate={(option) => {
                    return <Tag value={option} severity={getSeverity(option)}></Tag>;
                }}
            />
        )
    }

    const statusBodyTemplate = (rowData) => {
        return <Tag value={rowData.inventoryStatus} severity={getSeverity(rowData.inventoryStatus)}></Tag>;
    }

    const onRowEditComplete = (e) => {
        dispatch(updateTask({ idproj:idOfProjectSignle, Tid:e.newData.Tid, Ttitle:e.newData.Ttitle
        ,Tdescription:e.newData.Tdescription,Tpriority:e.newData.Tpriority ,TdueDate:e.newData.TdueDate  }))
    }

    const textEditor = (options) => {
        return <InputText type="text" value={options.value} onChange={(e) => options.editorCallback(e.target.value)} />;
    }

    const dateEditor = (options) => {
        return (
            <Calendar
                value={options.value}
                onChange={(e) => options.editorCallback(e.value)}
                dateFormat="dd/mm/yy"
                placeholder="בחר תאריך"
            />
        )
    }

    const dateBodyTemplate = (rowData) => {
        const date = new Date(rowData.TdueDate);
        return date.toLocaleDateString('he-IL')
    }

    const allowEdit = (rowData) => {
        return rowData.name !== 'Blue Band';
    }

    const deleteBody = (rowData) => {
    return (
        <Button icon="pi pi-trash" className="p-button-rounded p-button-danger p-button-text" onClick={() => deleted(rowData)}  /> )
    }  

    const deleted = (rowData) => {  
        dispatch(deleteTask({ idproj: idOfProjectSignle , idtask:rowData.Tid}))
    }

    const changeStatusBody = (rowData) => {
    return (
        <Button className="p-button-rounded p-button-text" onClick={() => changeStatus(rowData)}  /> )
    }
    
    const changeStatus = (rowData) => {  
        //dispatch(updateStatus({ idproj: idOfProjectSignle , idtask:rowData.dataKey}))
    }

    const addNewTask = (Tstatus) => { 
        dispatch(addTask({ idproj: idOfProjectSignle , status: Tstatus }))
    }

    return (
        <div className="grid grid-nogutter w-full" style={{ minHeight: '100vh' }}>

            <div className="col-12 md:col-4 p-1">
                <div className="surface-card p-0 border-round shadow-2 h-full border-blue-500 border-top-3">
                    <h3 className="text-center text-900 mb-4">To Do</h3>
                    <div className="card p-fluid" > 
                            <DataTable value={todoTasks} editMode="row" dataKey="Tid" onRowEditComplete={onRowEditComplete} >
                                {/* <Column field="code" header="Code" editor={(options) => textEditor(options)} style={{ width: '20%' }}></Column> */}
                                <Column field="Ttitle" header="Title" editor={(options) => textEditor(options)} style={{ width: '20%' }}></Column>
                                <Column field="Tdescription" header="Description" editor={(options) => textEditor(options)} style={{ width: '20%' }}></Column>
                                <Column field="Tpriority" header="Priority" body={statusBodyTemplate} editor={(options) => statusEditor(options)} style={{ width: '20%' }}></Column>
                                <Column field="TdueDate" header="Date" body={dateBodyTemplate} editor={(options) => dateEditor(options)} style={{ width: '20%' }} sortable></Column>
                                <Column rowEditor={allowEdit} headerStyle={{ width: '10%', minWidth: '4rem' }} bodyStyle={{ textAlign: 'center' }}></Column>
                                <Column body={deleteBody} headerStyle={{ width: '2%', minWidth: '4rem' }} bodyStyle={{ textAlign: 'center' }}></Column>
                                <Column body={changeStatusBody} headerStyle={{ width: '2%', minWidth: '4rem' }} bodyStyle={{ textAlign: 'center' }}></Column>
                            </DataTable>
                            <Button onClick={()=>addNewTask('toDo')} label="Add Task" icon="pi pi-plus" className="p-button-text mt-3 w-full" />
                        </div>
                        </div></div>

            <div className="col-12 md:col-4 p-1">
                <div className="surface-card p-0 border-round shadow-2 h-full border-blue-500 border-top-3">
                    <h3 className="text-center text-900 mb-4">In Progress</h3>
                    <div className="card p-fluid" >
                        <DataTable value={inProgressTasks} editMode="row" dataKey="Tid" onRowEditComplete={onRowEditComplete} >
                            {/* <Column field="code" header="Code" editor={(options) => textEditor(options)} style={{ width: '20%' }}></Column> */}
                            <Column field="Ttitle" header="Title" editor={(options) => textEditor(options)} style={{ width: '20%' }}></Column>
                            <Column field="Tdescription" header="Description" editor={(options) => textEditor(options)} style={{ width: '20%' }}></Column>
                            <Column field="Tpriority" header="Priority" body={statusBodyTemplate} editor={(options) => statusEditor(options)} style={{ width: '20%' }}></Column>
                            <Column field="TcreatedAt" header="Date" body={dateBodyTemplate} editor={(options) => dateEditor(options)} style={{ width: '20%' }} sortable></Column>
                            <Column rowEditor={allowEdit} headerStyle={{ width: '10%', minWidth: '8rem' }} bodyStyle={{ textAlign: 'center' }}></Column>
                        </DataTable>
                        <Button onClick={()=>addNewTask('inProgress')} label="Add Task" icon="pi pi-plus" className="p-button-text mt-3 w-full" />
                    </div>
                </div></div>

            <div className="col-12 md:col-4 p-1">
                <div className="surface-card p-0 border-round shadow-2 h-full border-green-500 border-top-3">
                    <h3 className="text-center text-900 mb-4">Done</h3>
                    <div className="card p-fluid" >
                        <DataTable value={doneTasks} editMode="row" dataKey="Tid" onRowEditComplete={onRowEditComplete} >
                            {/* <Column field="code" header="Code" editor={(options) => textEditor(options)} style={{ width: '20%' }}></Column> */}
                            <Column field="Ttitle" header="Title" editor={(options) => textEditor(options)} style={{ width: '20%' }}></Column>
                            <Column field="Tdescription" header="Description" editor={(options) => textEditor(options)} style={{ width: '20%' }}></Column>
                            <Column field="Tpriority" header="Priority" body={statusBodyTemplate} editor={(options) => statusEditor(options)} style={{ width: '20%' }}></Column>
                            <Column field="TcreatedAt" header="Date" body={dateBodyTemplate} editor={(options) => dateEditor(options)} style={{ width: '20%' }} sortable></Column>
                            <Column rowEditor={allowEdit} headerStyle={{ width: '10%', minWidth: '8rem' }} bodyStyle={{ textAlign: 'center' }}></Column>
                        </DataTable>
                        <Button  onClick={()=>addNewTask('Done')} label="Add Task" icon="pi pi-plus" className="p-button-text mt-3 w-full" />
                    </div>
                </div></div>
        </div>
    )
}


export default ProjectSingle