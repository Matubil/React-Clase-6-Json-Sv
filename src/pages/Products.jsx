import { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css"
import { useNavigate } from "react-router-dom";

const Products = ({ titulo, ...restOfProps }) => { //con restOfProps llegan el resto de las cosas del objeto

    let [products, setProductos] = useState([]); //Inicializamos con un array vacio
    let navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:3001/products").then((resp) => {
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
                        products.map((product) => (
                            <tr key={product.nombre}>
                                <td>{product.nombre}</td>
                                <td>{product.descripcion}</td>
                                <td>{product.precio}</td>
                                <td>
                                    <button className="btn btn-primary float-end" onClick={()=>
                                        {navigate(`/Products/${product.id}`)}}>
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