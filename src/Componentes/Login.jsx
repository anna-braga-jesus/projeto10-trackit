import React from "react";
import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import { useNavigate ,Link } from "react-router-dom";
import Button from "./Button";
import Logo from "./Logo";
import "./styles.css";

const Input = styled.input`
  height: 45px;
  width: 303px;
  margin-top: 16px;
  border-radius: 5px;
  color: #dbdbdb;
  /* font-family: Lexend Deca; */
  font-size: 20px;
  font-weight: 400;
  border: 1px solid #d4d4d4;
  padding: 10px;
`;

const Texto = styled.p`
  color: #52b6ff;
  font-family:'Lexend Deca', sans-serif;
  font-size: 24px;
  font-weight: 400;
  text-align: center;
  text-decoration-line: underline;
`;


//Usuário teste: bife@gmail.com
//Senha teste: 12345

export default function Login() {
  const [email, setEmail] = useState("");
  const [password,setPassword] = useState("");


 
   const [userData, setUserData] = useState({email:'',password:''});
   const [token, setToken] = useState("");
   const [image, setImage] = useState("");
   const [item,SetItem] = useState("");
   const[user,setUser]= useState(); //Tipos: pode ser IUser ou pode ser null, controla autorizaçao
   const [disable, setDisable] = useState(false);
   const [text, setText] = useState('Entrar');
  





   let navigate = useNavigate();
 
   function login(e){
     e.preventDefault();
     const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login';
     const promise = axios.post(URL, { email: userData.email, password: userData.password });
  
     promise.then((promise)=>{
       navigate('/hoje');
       setToken(promise.data.token);
       setImage(promise.data.image);
       localStorage.setItem('token',promise.data.token);
       localStorage.setItem('image',promise.data.image);
       console.log(`
       email: ${userData["email"]}
       senha: ${userData["password"]}
      `)
     });
  
     promise.catch((error)=>{
       setDisable(false);
       setText( 'Entrar' );
     });
   }
  


  return (
    <form onSubmit={login}>
      <div className="design">
        <Logo />
        <Input
          type="email"
          placeholder="email"
          required
           value={userData.email} disabled={disable}
                   onChange={ e => setUserData({...userData, email: e.target.value })}
                  
          
        />
        <Input
          type="password"
          placeholder="senha"
          required
          value={userData.password} disabled={disable}
          onChange={ e => setUserData({...userData, password: e.target.value }) }  
          
        />
        
          <Button type='submit' />
          

         {disable ? <Texto>Não tem uma conta? Cadastre-se! </Texto>
        : <Link to="/cadastro">
          <Texto>Não tem uma conta? Cadastre-se! </Texto>
        </Link> } 
      </div>
    </form>
  );
}
