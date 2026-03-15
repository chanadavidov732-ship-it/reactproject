import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { Button } from 'primereact/button'
import StatusEditor from './StatusEditor'
import ChangeStatusBody from './ChangeStatusBody'
import DateEditor from './DateEditor'
import TextEditor from './TextEditor'
import DeleteBody from './DeleteBody'
                    
import React from 'react'

const ShowProjectCard = ({ whatTasksToShow, typeCurrentStatus, onRowEditComplete, statusBodyTemplate, dateBodyTemplate, idOfProjectSignle, allowEdit, addNewTask, deleted, statuses }) => {

    return (
        <div className="col-12 md:col-4 p-1">
            <div className="surface-card p-0 border-round shadow-2 h-full border-blue-500 border-top-3">
                <h3 className="text-center text-900 mb-4">To Do</h3>
                <div className="card p-fluid" >
                    <DataTable value={whatTasksToShow} editMode="row" dataKey="Tid" onRowEditComplete={onRowEditComplete} >

                        <Column field="Ttitle" header="Title" editor={(options) => (<TextEditor options={options} />)} style={{ minWidth: '100px' }}></Column>
                        <Column field="Tdescription" header="Description" editor={(options) => (<TextEditor options={options} />)} style={ {minWidth: '100px' }}></Column>
                        <Column field="Tpriority" header="Priority" body={statusBodyTemplate} editor={(options) => (<StatusEditor options={options} statuses={statuses} />)} style={{ minWidth: '80px' }}></Column>
                        <Column field="TdueDate" header="Date" body={dateBodyTemplate} editor={(options) => (<DateEditor options={options} />)} style={{ width: '20%' }} sortable></Column>
                        <Column rowEditor={allowEdit} headerStyle={{ width: '10%', minWidth: '4rem' }} bodyStyle={{ textAlign: 'center' }}></Column>
                        <Column body={(rowData) => (<DeleteBody rowData={rowData} deleted={deleted} />)} headerStyle={{ minWidth: '3rem' }} bodyStyle={{ textAlign: 'center' }}></Column>
                        <Column body={(rowData) => (<ChangeStatusBody rowData={rowData} idOfProjectSignle={idOfProjectSignle} />)} headerStyle={{  width: '8rem' }} bodyStyle={{ textAlign: 'center' }}></Column>

                    </DataTable>
                </div>
              <Button onClick={() => addNewTask(typeCurrentStatus)} label="Add Task" icon="pi pi-plus" className="p-button-text mt-3 w-full" />
            </div>
            </div>
    )
}
export default ShowProjectCard