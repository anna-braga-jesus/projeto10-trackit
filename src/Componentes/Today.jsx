import Topo from "./Topo";
import Footer from "./Footer";
import styled, { css } from "styled-components";
//import { useEffect } from "react";
import { useState, useContext } from "react";
import axios from 'axios';
import dayjs from "dayjs";
import 'dayjs/locale/pt-br' 
import { UserContext } from "./App";
import { weekdays } from "dayjs/locale/pt-br";

const date = dayjs().locale('pt-br').format('dddd, DD/MM');
let updateLocale = require('dayjs/plugin/updateLocale');
dayjs.extend(updateLocale);

dayjs.updateLocale('pt-br', {
  weekdays:[
     "Domingo",
     "Segunda",
     "Terça",
     "Quarta",
     "Quinta",
     "Sexta",
     "Sábado"
   ]
 });
  

function get(token){
	let promise;
	return promise = axios.get(
		"https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today",
		{ headers: { "Authorization": `Bearer ${token}` } }
	)
}
function post(id, token, mark=false){
	let promise;
	let LINK;
	if(!mark){
		LINK = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`
	}else{
		LINK = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`
	}
	return promise = axios.post(
		LINK,
		undefined,
		{ headers: { "Authorization": `Bearer ${token}` } }
	)
}

export default function Today() {
	let {token} = useContext(UserContext)
	const [ habitList, setHabitList ] = useState([]);
	const [ tasks, setTasks ] = useState([0,0]);
	
	const date = dayjs().locale('pt-br').format('dddd, DD/MM');
	
	let getPercentTask = function(){
		let percents = parseInt((tasks[0] / tasks[1])*100)
		if( tasks[0] != 0){
			return [percents + "% dos hábitos concluídos", true]
		} else {
			return ["Nenhum hábito concluído ainda", false]
		}
	}
	let processssss = async ()=>{ 
		let ret = await get(token);
		return ret;
	}
	processssss().then(b =>{ setHabitList( [...b.data] ) })
	let teter = getPercentTask()
	tasks[0] = 0; tasks[1] = 0;
	habitList.forEach(
		(a, b) =>{
			tasks[1]++;
			if(a.done){ tasks[0] ++ }
		}
	)

	return (
		<>
			<Topo />
			<Container>
				
				<Title>{date}</Title>
				<Subtitle completed={teter[1]}>{teter[0]}</Subtitle>
				{
					habitList.map(
						(a, b) => {
							console.log("oi" + teter)
							return <Habitos idEl={a.id} name={a.name} completed={a.done}/>
						}
					)
				}
			</Container>
			<Footer />
		</>
	);
}

function Habitos(props) {
	let {token} = useContext(UserContext);
	const [id, setId] = useState(props.idEl);

	function chk(){
		if(!props.completed){
			post(id, token);
		}else{
			post(id, token, true)
		}
	}
  	return (
		<OhYeah>
			<span>{props.name}</span>
			<Chekit done={props.completed} onClick={chk}>
				<ion-icon name="checkmark-outline"></ion-icon>
			</Chekit>
		</OhYeah>
	);
}


const Chekit = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${props => props.done ? '#9cd74f' :'#e1e1e1'};
	border-radius: 8px;
	height: 64px;
	width: 64px;
	color: white;
	ion-icon{
		font-size: 50px;
	}
`
const Container = styled.section`
	overflow-y: scroll;
	height: 85vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: #eee;
	border-radius: 5px;
	&::-webkit-scrollbar{
		width: 0;
	}
`;
const Title = styled.p`
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto;
	width: 90%;
	font-size: 32px;
	color: dodgerblue;
	font-weight: 700;
`;
const Subtitle = styled.p `
  width: 90%;
  font-size: 18px;
  color: ${props => props.completed ? '#8FC549' :'#5e5e5e'};
  margin-top: 10px;
  margin-bottom: 28px;
`;
const OhYeah = styled.div`
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	width: 90%;
	padding: 20px;
	display: flex;
	justify-content: space-between;
	background-color: white;
	border-radius: 4px; 
	margin: 0 auto 10px auto;
	span{
		font-size: 26px;
	}
`;








   





