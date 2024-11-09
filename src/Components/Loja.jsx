import React, { useState, useEffect } from "react";
import axios from "axios";
//O Axios é uma biblioteca JavaScript que facilita fazer requisições HTTP, ou seja, buscar dados de APIs e servidores externos, ou enviar dados para eles. Com o Axios, você pode fazer requisições do tipo GET, POST, PUT, DELETE

function Loja() {
  // para armazenar os dados da API
  const [produtos, setProdutos] = useState([]);
  //função que vai pegar os dados da API, atualizar a variavel produtos
  // Uma função async é como dizer para o código “Olha, esta tarefa pode demorar, mas continue executando o resto do código normalmente e me avise quando estiver pronta”.
  const pegarProdutos = async () => {
    //await - espere
    const dados = await axios.get("https://fakestoreapi.com/products");
    setProdutos(dados.data);
    console.log(dados);
  };

  useEffect(() => {
    pegarProdutos();
  }, []);

  return (
    <>
      <h1>Essa é a API da nossa loja:</h1>
      {produtos.map((item) => (
        <figure>
          <img src={item.image} alt="" />
          <figcaption>{item.title}</figcaption>
        </figure>
      ))}
    </>
  );
}
export default Loja;
