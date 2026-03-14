import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux' 
import { configureStore } from '@reduxjs/toolkit';
import LoginSlice from './store/LoginSlice.js';
import ProjectsSlice from './store/ProjectsSlice.js'
import { BrowserRouter } from 'react-router-dom';
import Projects from './components/Projects.jsx'
import "primereact/resources/themes/lara-light-cyan/theme.css"; 
import "primereact/resources/primereact.min.css";              
import "primeicons/primeicons.css";
import 'primeflex/primeflex.css';

const store = configureStore({
  reducer:{
    LoginSlice,
    ProjectsSlice
  }
})
createRoot(document.getElementById('root')).render(
<Provider store={store}>
<BrowserRouter>
      <App />
    </BrowserRouter>
    </Provider>
)
