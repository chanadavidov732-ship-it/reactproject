import { useDispatch } from "react-redux"
import {  updateStatus } from '../store/ProjectsSlice'
import {  changeStatuses } from '../utils/constants'
import { Button } from "primereact/button"


const ChangeStatusBody = ({ rowData, idOfProjectSignle }) => {
    const dispatch = useDispatch();

    const getNextStatus = (currentStatus) => {
        const currentIndex = changeStatuses.findIndex(s => s.name === currentStatus);
        const nextIndex = (currentIndex + 1) % changeStatuses.length;
        return changeStatuses[nextIndex].name;
    };

    const handleClick = () => {
        const nextStatusName = getNextStatus(rowData.Tstatus);
        dispatch(updateStatus({ 
            idproj: idOfProjectSignle, 
            Tid: rowData.Tid, 
            Tstatus: nextStatusName 
        }));
    };

    return (
        <Button 
            icon="pi pi-sync" 
            onClick={handleClick}
            className="p-button-rounded p-button-text p-button-sm compact-btn"
            tooltip="Change Status"
            tooltipOptions={{ position: 'top' }}
            style={{ width: '1.5rem', height: '1.5rem', padding: '0' }} 
        />
    );
}
export default ChangeStatusBody





















// const ChangeStatusBody = ({ rowData ,idOfProjectSignle}) => {

//     const dispatch = useDispatch()
//     const changeStatus = (rowData) => {
//         dispatch(updateStatus({ idproj: idOfProjectSignle, Tid: rowData.Tid, Tstatus: rowData.Value }))
//     }

//     return (
//         <div className="card flex justify-content-center">
//             <Dropdown value={rowData.Tstatus} 
//             onChange={(e) => changeStatus({ Tid: rowData.Tid, Value: e.value.name })} 
//             options={changeStatuses} optionLabel="name"
//             placeholder="Change status" className="w-full md:w-14rem"
//             style={{ width: '100%', maxWidth: '110px', fontSize: '13px' }}
//             />
//         </div>
//     )
// }


// export default ChangeStatusBody
