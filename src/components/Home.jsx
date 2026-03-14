import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { log } from '../store/LoginSlice'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'

import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";

const Home = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const isLogged = useSelector(state => state.LoginSlice.isLogged)
  const { register, handleSubmit, formState: { errors } } = useForm()
  
  const [value, setValue] = useState('');


  useEffect(() => {
    if (isLogged) {
      navigate('/Projects')
    }
  }, [isLogged, navigate])

  const onSubmit = (data) => {
    dispatch(log({ name: data.userName, mail: data.userMail }))
  }

  return (

    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        
        <input
          placeholder="name"
          {...register("userName", { required: "חובה להזין שם" })}
        />
        {errors.userName && <span style={{ color: 'red' }}>{errors.userName.message}</span>}
      </div>
      
      <div>
        <input
          placeholder="mail"
          {...register("userMail", {
            required: "חובה להזין מייל",
            pattern: {
            value: /^\S+@\S+\.\S+$/,
              message: "מייל לא תקין"
            }
          })}
        />
        {errors.userMail && <span style={{ color: 'red' }}>{errors.userMail.message}</span>}
        </div>
      <button type="submit">login</button>
    </form>
  )
}

export default Home