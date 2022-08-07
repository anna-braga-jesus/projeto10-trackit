import React, { useContext } from "react";
import styled from "styled-components";
import { ThreeDots } from 'react-loader-spinner'
import { useState } from "react";
import axios from "axios";
import { useNavigate ,Link } from "react-router-dom";
import Button from "./Button";
import Logo from "./Logo";
import "./styles.css";
import { UserContext } from "./App";



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
  const [loading, setLoading] = useState(false)
  let oi = useContext(UserContext);


  const [email, setEmail] = useState("");
  const [password,setPassword] = useState("");


  const { token,setToken} = useContext(UserContext);
   const [userData, setUserData] = useState({email:'',password:''});
   const [image, setImage] = useState("");
   const [item,SetItem] = useState("");
   const[user,setUser]= useState(); //Tipos: pode ser IUser ou pode ser null, controla autorizaçao
   const [disable, setDisable] = useState(false);
   const [text, setText] = useState('Entrar');
  





   let navigate = useNavigate();
 
   function login(e){
     e.preventDefault();
     setLoading(true);
     const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login';
     const promise = axios.post(URL, { email: userData.email, password: userData.password });
  
     promise.then((promise)=>{
       navigate('/hoje');
       setLoading(false);
       setToken(promise.data.token);
       setImage(promise.data.image);
       localStorage.setItem('user', promise.data);
       console.log(promise.data)
       oi.setUser(
        {name: promise.data.name, image: promise.data.image, token: promise.data.token, email: promise.data.email, id:promise.data.id, password: promise.data.password}
       )
       console.log(token)
     });
  
     promise.catch((error)=>{
       setDisable(false);
       setText( 'Entrar' );
       setLoading(false);
     });
   }
   function getImage (){
    const localImage = localStorage.getItem('ImageAnna');
     if ( localImage !== undefined && localImage !== null && localImage !== '') {
      return localStorage.getItem('ImageAnna') ;
    } else {
      return '';
    }
  }


  return (

        <form onSubmit={login} disable={loading}>
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
            
                <Button type="submit">
                    {loading ? <ThreeDots color="#FFF" height={50} width={50} /> : 'Entrar'}
                </Button>
                  
                
              

            {disable ? <Texto>Não tem uma conta? Cadastre-se! </Texto>
            : <Link to="/cadastro">
              <Texto>Não tem uma conta? Cadastre-se! </Texto>
            </Link> } 
          </div>
        </form>
  );
}
