import { useState, useEffect } from "react";
//import axios from 'axios';



const [habits, setHabits] = useState();

// const [email,setEmail] = useState("");
// const [password, setPassword] = useState("")

 const API ="https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up"



    // async function authenticate(  /*email: 'string', password:'string' */ ){
    //     const response = await LoginRequest(email,password)
        //Essa resposta pode ser nula ou de sucesso

        //Se ela tiver sucesso, vamos receber o payload
        //const payload ={load: response.token, email: response.email}
        //setUser(payload);
    // }
    // function logout(){
    //     //setUser(null)

    // }
    // async function LoginRequest( /*email: 'string', password:'string' */){
    //     //Essa função que vai acessar a API
    //     // Se der certo return request.data
    //     //: return null;
    // }