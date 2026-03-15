import { useDispatch } from "react-redux"
import {  updateStatus } from '../store/ProjectsSlice'
import { Dropdown } from 'primereact/dropdown'
import {  changeStatuses } from '../utils/constants'

const ChangeStatusBody = ({ rowData ,idOfProjectSignle}) => {

    const dispatch = useDispatch()
    const changeStatus = (rowData) => {
        dispatch(updateStatus({ idproj: idOfProjectSignle, Tid: rowData.Tid, Tstatus: rowData.Value }))
    }

    return (
        <div className="card flex justify-content-center">
            <Dropdown value={rowData.Tstatus} onChange={(e) => changeStatus({ Tid: rowData.Tid, Value: e.value.name })} options={changeStatuses} optionLabel="name"
                placeholder="Change status" className="w-full md:w-14rem" />
        </div>
    )
}


export default ChangeStatusBody