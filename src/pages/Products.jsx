import { useEffect, useState } from "react";
import axios from "axios";
import "boostrap/dist/css/boostrap.css";

const Products = ({ titulo }) => {

    let [productos, setProductos] = useState();

    useEffect(()=> {
        axios.get("http://localhost:3001/productos").then((resp)=>{
            setProductos(resp.data);
        })
    }, [])

    return (() => {
        <main>
            <h1>{titulo}</h1>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Descripcion</th>
                        <th>Precio</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        productos.map((producto=>(
                            
                        ))
                    }
                </tbody>
            </table>
        </main>
    })
} 

export default Products;