import { useEffect, useState } from "react";

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
        </main>
    })
} 

export default Products;