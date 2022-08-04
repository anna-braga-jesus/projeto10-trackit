import Header from "./Header";
import Login from "./Login";
import Registration from "./Registration";
import Habits from "./Habits";
import Today from "./Today";
import History from "./History";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import GlobalStyle from "./GlobalStyle";
import { } from  'react-loader-spinner'
export default function App(){

    // const Private = (  { Item  }) => {
    //     const signed = false;

    //     return signed > 0 ? <Item /> : <Signin />

    // };





    return (
        
            <BrowserRouter>
            {/* <UserContextProvider> */}
                 <GlobalStyle /> 
                <Header /> 
                <Routes>
                    <Route path='/' element={<Login />} />
                    <Route path='/cadastro' element={<Registration />} />
                    <Route path='/habitos' element={<Habits />} />
                    <Route path='/hoje' element={<Today />} />
                    <Route path='/historico'  element={<History />} />
                </Routes>
                {/* </UserContextProvider> */}
            </BrowserRouter>
    
        
    );
}