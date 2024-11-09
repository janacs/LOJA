import React, { useState, useEffect } from "react";
import axios from "axios";
//O Axios é uma biblioteca JavaScript que facilita fazer requisições HTTP, ou seja, buscar dados de APIs e servidores externos, ou enviar dados para eles. Com o Axios, você pode fazer requisições do tipo GET, POST, PUT, DELETE

function Serie() {
  // para armazenar os dados da API
  const [dados, setDados] = useState([]);
  //função que vai pegar os dados da API, atualizar a variavel produtos
  // Uma função async é como dizer para o código “Olha, esta tarefa pode demorar, mas continue executando o resto do código normalmente e me avise quando estiver pronta”.
  const getDados = async () => {
    //await - espere
    const Dados = await axios.get("https://rickandmortyapi.com/api/character");
    setDados(Dados.data.results);
    console.log(Dados);
  };
  //para executar a api assim que a pagina for montada
  useEffect(() => {
    getDados();
  }, []);

  return (
    <>
      {/* para exibir os dados da API */}
      <h1> A Api Rick Morty </h1>
      {dados.map((item) => (
        <figure>
          <img src={item.image} alt="" />
          <figcaption>{item.name}</figcaption>
        </figure>
      ))}
    </>
  );
}

export default Serie;
