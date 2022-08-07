import Header from "./Header";
import Login from "./Login";
import Registration from "./Registration";
import Habits from "./Habits";
import Today from "./Today";
import History from "./History";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import {} from "react-loader-spinner";
import { useContext, useState } from "react";
import React from "react";


export const UserContext = React.createContext();

//import { AuthProvider} from
export default function App() {
	const [token, setToken] = useState("");

	let [user, setUser] = useState({
		name: '', image: '', token: '', email: '', id:'', password: ''
	})
  return (
		<UserContext.Provider value={ {user, setUser,token,setToken} }>
			<div className="app">
			<BrowserRouter>
			<GlobalStyle />
			<Header />
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/cadastro" element={<Registration />} />
				<Route path="/habitos" element={<Habits />} />
				<Route path="/hoje" element={<Today />} />
				<Route path="/historico" element={<History />} />
			</Routes>
			</BrowserRouter>
			</div>
			
	  </UserContext.Provider>
  );
}
