import { Button } from "primereact/button"


const DeleteBody = ({ rowData, deleted }) => {
    return (
                <div className="card">

        <div className="flex flex-wrap justify-content-center gap-3">
            <Button icon="pi pi-trash" rounded text severity="danger" aria-label="Cancel" size="small" onClick={() => deleted(rowData)} />
        </div>     </div>
    )
}


export default DeleteBody