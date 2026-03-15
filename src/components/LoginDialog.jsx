import { useDispatch, useSelector } from 'react-redux'
import { log } from '../store/LoginSlice'
import { useForm } from 'react-hook-form'
import { Dialog } from "primereact/dialog"
import { Button } from 'primereact/button'


const LoginDialog = ({ visible, setVisible }) => {
    const dispatch = useDispatch()
    const { register, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = (data) => {
        setVisible(false)
        dispatch(log({ name: data.loginName, mail: data.loginMail }))
    }
    return (

        <Dialog header="Login the web" visible={visible}
            style={{ width: '30vw' }} onHide={() => setVisible(false)}>
            <form className="flex flex-column gap-3" onSubmit={handleSubmit(onSubmit)}>

                <div className="flex flex-column gap-2" >
                    <label htmlFor="loginName">Enter name</label>
                    <input className="p-inputtext p-component" id="loginName"
                        placeholder="Name"{...register("loginName", { required: "name required" })}
                    />
                    {errors.loginName && <span style={{ color: 'red' }}>{errors.loginName.message}</span>}
                </div>

                <div className="flex flex-column gap-2" >
                    <label htmlFor="loginMail">Enter mail</label>
                    <input className="p-inputtext p-component" id="loginMail"
                        placeholder="mail"
                        {...register("loginMail", {
                            required: "mail required",
                            pattern: { value: /^\S+@\S+\.\S+$/, message: "unvalid mail" }
                        })}
                    />
                    {errors.loginMail && <span style={{ color: 'red' }}>{errors.loginMail.message}</span>}
                </div>

                <Button type="submit" label="Login" icon="pi-lock-open" className="mt-2" />
            </form>
        </Dialog>
    )
}

export default LoginDialog