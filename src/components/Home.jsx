import { useEffect, useState } from 'react'
import {  useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Button } from "primereact/button"
import LoginDialog from './LoginDialog'
import '../App.css'
const Home = () => {

  const navigate = useNavigate()
  const isLogged = useSelector(state => state.LoginSlice.isLogged)

  useEffect(() => {
    if (isLogged) {
      navigate('/Projects')
    }
  }, [isLogged, navigate])

  const [visible, setVisible] = useState(false)

  const goToLogin = () => {
    setVisible(true)
  }

  return (

    <div className="home-content">
      <div className="glass-background"></div>

      <div className="top-right-button">
        <Button onClick={goToLogin} label="Login" icon="pi pi-sign-in" className="p-button-rounded"style={{ color: '#06b6d4' }} />
      </div>

      <div className="content-container">
        <h1 style={{ fontSize: '4rem', color: '#2c3e50' }}>Welcome to your projects</h1>
        <h3 style={{ color: '#7f8c8d' }}>To view all projects please log in(name:c , mail:c@c.c)</h3>
      </div>

      <LoginDialog visible={visible} setVisible={setVisible} />
    </div>

  )




}

export default Home