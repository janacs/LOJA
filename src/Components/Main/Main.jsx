import axios from "axios";
import { useEffect, useState } from "react";

export default function Main(){

    const [produtos,setProdutos]= useState([])

    const pegarProdutos = async () => {

    const dados = await axios.get("https://fakestoreapi.com/products");

        setProdutos(dados.data)

    console.log(dados)
    }

    useEffect(()=>{
        pegarProdutos()
    },[])

    return(
        <main>
            <h2>Produtos</h2>
            <section>
            <section>
                
                {produtos.map((item)=> (
                    <div key={item.id}>
                        <img src={item.image} alt={item.title} />
                        <h3>{item.title}</h3>

                    </div>
                ))}
            
        </section>
    </main>
)
}
}

