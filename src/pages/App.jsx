import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import url from '../services/Settings'
import img from '../img/ohrapampa-logohorizontal.png'
import caja from '../img/caja.gif'

const App = () => 
{
    const clave = '439234180678'
    const [data, setData] = useState([])
    const [ loading, setLoading] = useState(true)
    let { codigo } = useParams()

    useEffect(() =>
    {
        fetchResource()
    },[])

    const fetchResource = async () => 
    {
        try
        {
            let res = await fetch(url+'obtener-pedidos-preparados-cod.php?codigo='+codigo+'&clave='+clave)
            let datos = await res.json()
            if(typeof datos !== 'undefined')
            {
                setData(datos)
                setLoading(false)
            }
        }
        catch(error)
        {
            console.error(error)
        }
    }

    if(!loading)
        return (
            <>
                <nav>
                    <div className="img-logo">
                        <img src={img} alt='Logo Ohrapampa'></img>
                    </div>
                </nav>
                <div className="img-banner">
                    <img src="https://club.ohrapampa.com/wp-content/uploads/2021/08/header-tienda-1.jpg" loading="lazy" alt="Baner Ohrapampa" />
                </div>
                <main>
                    <div className="container-app">
                        <div className="container-right">
                            <div className="container-info">
                                <h3>Detalles Del Pedido</h3>
                            </div>
                            <div className="container-info">
                                <p>
                                    <br/>
                                    <label>Numero de pedido: {data[0].num_pedido}</label>
                                    <br/>
                                    <label>Cliente: {data[0].cliente}</label>
                                    <br/>
                                    <label>Direccion: {data[0].direccion}</label>
                                    <br/>
                                    <label>Codigo postal: {data[0].cod_postal}</label>
                                    <br/>
                                    <label>Telefono: {data[0].telefono}</label>
                                    <br/>
                                    <label>Ciudad: {data[0].ciudad}</label>
                                </p>
                            </div>
                        </div>
                        <div className="container-left">
                            <img className="img-caja" src={caja} loading="lazy" alt="Caja"/>
                        </div>
                        <div>
                            <div className="container-info">
                                <h3>Combo Personalizado</h3>
                            </div>
                            <div className="container-info">
                                <p>
                                    {data.map((fila) =>
                                    (
                                        <>
                                            <label key={fila.id}>{fila.cantidad} - {fila.descripcion}</label><br/> 
                                        </>
                                    ))}                                  
                                </p>
                            </div>
                        </div>  
                    </div>           
                </main>  
            </>      
        )
    return (
        <article className="container-loader">
            <div className="loader">Loading...</div>
        </article>
    )
}

export default App
