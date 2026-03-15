import { useDispatch } from 'react-redux'
import { add } from '../store/ProjectsSlice'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { Dialog } from 'primereact/dialog'
import { Button } from "primereact/button"


const NewProject = ({ visible2, setVisible2 }) => {
  const dispatch = useDispatch()
  const { register, handleSubmit, formState: { errors } } = useForm()
  const navigate = useNavigate()

  const onSubmit = (data) => {
    setVisible2(false)
    dispatch(add({ id: data.proId, name: data.proName, description: data.proDescription }))
  }

  return (

    <Dialog header="Update Project Details" visible={visible2} style={{ width: '30vw' }} onHide={() => setVisible2(false)}>
      <form className="flex flex-column gap-3" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-column gap-2">
          <input className="p-inputtext p-component"
            placeholder="id"
            {...register("proId", { required: "id required" })}
          />
          {errors.proId && <span style={{ color: 'red' }}>{errors.proId.message}</span>}
        </div>

        <div className="flex flex-column gap-2">
          <input className="p-inputtext p-component"
            placeholder="name"
            {...register("proName", { required: "name required" })}
          />
          {errors.proName && <span style={{ color: 'red' }}>{errors.proName.message}</span>}
        </div>

        <div className="flex flex-column gap-2">
          <input className="p-inputtext p-component"
            placeholder="description"
            {...register("proDescription", { required: "description required" })}
          />
          {errors.proDescription && <span style={{ color: 'red' }}>{errors.proDescription.message}</span>}
        </div>
        <Button type="submit" style={{ color: '#06b6d4' }}>Add</Button>
      </form>
    </Dialog>
  )
}


export default NewProject