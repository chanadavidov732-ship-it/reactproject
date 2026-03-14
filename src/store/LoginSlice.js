import { createSlice } from '@reduxjs/toolkit'

const initVal = {
  name: 'c',
  mail: 'c@c.c',
  isLogged: false
}

const LoginSlice = createSlice({  
  name: "login",
  initialState: initVal,
  reducers: {
    log: (state, action) => {
      const { name, mail } = action.payload
      if (name === initVal.name && mail === initVal.mail) {
        state.isLogged = true
      }
    },
    logout: (state) => {
      state.isLogged = false
    }
  }
})

export const { log, logout } = LoginSlice.actions
export default LoginSlice.reducer