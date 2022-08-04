import Logo from "./Logo";
import styled from "styled-components";
import Cadastrar from "./Cadastrar";
import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Input = styled.input`
  margin-top: 16px;
  width: 303px;
  height: 45px;
  border-radius: 5px;
  color: #dbdbdb;
  /* font-family: Lexend Deca; */
  font-size: 20px;
  font-weight: 400;
  border: 1px solid #d4d4d4;
  padding: 10px;
`;

const CaixaTexto = styled.div`
    color:#52b6ff ;
    font-family:'Lexend Deca', sans-serif;
    font-size: 24px;
    font-weight: 400;
    text-align: center;
    text-decoration-line: underline;


`
export default function Registration() {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    name: "",
    image: "",
  });
  const [disable, setDisable] = useState(false);
  const navigate = useNavigate();

  function register(e) {
    e.preventDefault();
    setDisable(true);

    const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up';
    const promise = axios.post(URL, userData);

    promise.then(() => navigate("/"));
    promise.catch((error) => {
      //console.log('Erro ao cadastrar')
       alert(
         `Erro ao cadastrar: \n\n${error.response.status} - ${error.response.data.message}`
       );
      setDisable(false);
    });
  }

  return (
    <form onSubmit={register}>
      <div className="design">
        <Logo />
        <Input
          type="email"
          placeholder="email"
          required
          value={userData.email}
          disabled={disable}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
        />
        <Input
          type="password"
          placeholder="senha"
          required
          value={userData.password}
          disabled={disable}
          onChange={(e) =>
            setUserData({ ...userData, password: e.target.value })
          }
        />
        <Input
          type="text"
          placeholder="nome"
          required
          value={userData.name}
          disabled={disable}
          onChange={(e) => setUserData({ ...userData, name: e.target.value })}
        />
        <Input
          type="url"
          placeholder="foto"
          required
          value={userData.image}
          disabled={disable}
          onChange={(e) => setUserData({ ...userData, image: e.target.value })}
        />
        <Cadastrar type="submit" disabled={disable} />
        <Link to={'/'}>
            <CaixaTexto>Já tem uma conta? Faça login!</CaixaTexto> 
        </Link>
         
         {/* <Link to>
          <div>Já tem uma conta? Faça login! </div> 
           <div>Já tem uma conta? Faça login! </div> </Link> */}

      </div>
    </form>
  );
}
