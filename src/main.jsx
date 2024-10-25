import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AuthContext from './Context/AuthProvider.jsx'
import AuthProvider from './Context/AuthProvider.jsx'


createRoot(document.getElementById('root')).render(
 <AuthProvider>
    <App />
 </AuthProvider>
)
