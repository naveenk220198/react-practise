import React from 'react'
import ReactDOM from 'react-dom/client'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import TextField from '@mui/material/TextField';
import Header from './components/Header'
import Body from './components/Body';
const Layout = () => (
    <div>
       {Header()}
       <Body />
    </div>
)
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Layout />);