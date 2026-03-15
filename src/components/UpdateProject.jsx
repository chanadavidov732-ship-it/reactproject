import { Dialog } from "primereact/dialog"
import { Button } from "primereact/button"
import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import { update } from '../store/ProjectsSlice'

const UpdateProject = ({ id, visible, setVisible }) => {

    const { register, handleSubmit, formState: { errors } } = useForm()
    const dispatch = useDispatch()
    const onSubmit = (data) => {
        setVisible(false)
        dispatch(update({ id: data.proId, name: data.proName, description: data.proDescription }))
    }

    return (
        <><Dialog header="Update Project Details" visible={visible}
            style={{ width: '30vw' }} onHide={() => setVisible(false)}>
            <form className="flex flex-column gap-3" onSubmit={handleSubmit(onSubmit)}>
                <input type="hidden" {...register("proId")} value={id} />

                <div className="flex flex-column gap-2">
                    <label htmlFor="proName">Project Name</label>
                    <input className="p-inputtext p-component" id="proName"
                        placeholder="Name" {...register("proName")} />
                </div>

                <div className="flex flex-column gap-2">
                    <label htmlFor="proDescription">Description</label>
                    <input className="p-inputtext p-component" id="proDescription"
                        placeholder="Description" {...register("proDescription")} />
                </div>
                
                <Button type="submit" label="Update Project" icon="pi pi-check" className="mt-2" />
            </form>
        </Dialog></>
    )
}
export default UpdateProject