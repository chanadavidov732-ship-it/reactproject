import { useDispatch } from 'react-redux'
import { add } from '../store/ProjectsSlice'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

const NewProject = () => {
  const dispatch = useDispatch()
  const { register, handleSubmit  ,formState: { errors }} = useForm()
  const navigate = useNavigate()

  const onSubmit = (data) => {
    dispatch(add({ id: data.proId, name: data.proName, description: data.proDescription }))
    navigate('/Projects')
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            placeholder="id"
            {...register("proId", { required: "id required" })}
          />
          {errors.proId && <span style={{ color: 'red' }}>{errors.proId.message}</span>}
        </div>

        <div>
          <input
            placeholder="name"
            {...register("proName", { required: "name required" })}
          />
          {errors.proName && <span style={{ color: 'red' }}>{errors.proName.message}</span>}
        </div>

        <div>
          <input
            placeholder="description"
            {...register("proDescription", { required: "description required" })}
          />
          {errors.proDescription && <span style={{ color: 'red' }}>{errors.proDescription.message}</span>}
        </div>
        <button type="submit">add</button>
      </form>
    </>
  )
}


export default NewProject