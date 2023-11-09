import { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css"
import { useNavigate } from "react-router-dom";

const Products = ({ titulo, ...restOfProps }) => { //con restOfProps llegan el resto de las cosas del objeto

    let [productos, setProductos] = useState([]); //Inicializamos con un array vacio
    let navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:3001/productos").then((resp) => {
            setProductos(resp.data);
        })
    }, [])

    return (
        <main>
            <h1>{titulo}</h1>

            <button className="btn btn-success text-center w-100 mb-3" onClick={()=>{navigate("/")}}> {/* Lo que hace el navigate o useNavigate, es que puedas elegir a donde o que parte d etu pagina ir usando las routes que definimos */}
                Volver
            </button>

            <table className="table">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Descripcion</th>
                        <th>Precio</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        productos.map((producto) => (
                            <tr key={producto.nombre}>
                                <td>{producto.nombre}</td>
                                <td>{producto.descripcion}</td>
                                <td>{producto.precio}</td>
                                <td>
                                    <button className="btn btn-primary float-end" onClick={()=>
                                        {navigate(`/Products/${producto.id}`)}}>
                                        Editar
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </main>
    )
}

export default Products;