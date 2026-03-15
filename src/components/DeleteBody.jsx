import { Button } from "primereact/button"


const DeleteBody = ({ rowData, deleted }) => {
    return (
        <Button icon="pi pi-trash" className="p-button-rounded p-button-danger p-button-text"
            onClick={() => deleted(rowData)} />
    )
}


export default DeleteBody