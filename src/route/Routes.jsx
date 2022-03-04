import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from '../pages/App'

function Rutas ()
{
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/:codigo" element={<App/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Rutas