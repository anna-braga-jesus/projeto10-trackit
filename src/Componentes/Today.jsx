import Topo from "./Topo";
import Footer from "./Footer";
import styled, { css } from "styled-components";
//import { useEffect } from "react";
//import axios from 'axios';
import dayjs from "dayjs";
import 'dayjs/locale/pt-br' 


export default function Today() {
 
  //   const { token, Rate } = useContext(UserContext);
  //   const [habitsList, setHabitsList] = useState([]);
   const date = dayjs().locale('pt-br').format('dddd, DD/MM');
  //  const dias = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta","Sábado"]
  

//   useEffect(() => {
//     if (token.length > 0) getList(token);
//   }, [token]);

//   function loadList(load) {
//     if (load) getList(token);
//   }
      // function FormatarData(str){
      //   const weekDay = dias.find((_, i) => i === dayjs().day())
      //   const day = dayjs().date()
      //   let month = dayjs().month()
      //   month < 10 ? month = `0${month + 1}` : month = month + 1
      //   return `${weekDay}, ${day}/${month}`
      // }
     
//   function getList(token) {
//     const CONFIG = { headers: { Authorization: `Bearer ${token}` } };
//     const URL =
//       "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";
//     const promise = axios.get(URL, CONFIG);

//     promise.then((response) => {
//       setHabitsList([...response.data]);
//     });

//     promise.catch((error) =>
//       alert(
  //        `Erro ao carregar lista: \n\n${error.response.status} - ${error.response.data.message}`
  //      )
  //    );
  //  }
  
  return (
    <>
      <Topo />
      <Container>
        
        <Title>
           {date}    
           {/* {FormatarData()} */}
          </Title>
            
        <Subtitle 
        // done={true}
        >
            {/* {Rate} */}
            0% dos hábitos concluídos</Subtitle>
            {/* :{" "} */}
        <Subtitle 
        // done={false}
        >Nenhum hábito concluído ainda</Subtitle>
        {/* {habitsList.length > 0 &&
          habitsList.map((habitInfo, index) => (
            <HabitToday key={index} habitInfo={habitInfo} load={loadList} />
          ))} */}
      </Container>
      <Footer />
    </>
  );
}

const Container = styled.section`
  width: 100%;
  height: calc(100vh-100px);
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 100px 0;
`;

const Title = styled.p`
  width: var(--default-width);
  font-size: 23px;
  color: var(--header-color);
`;
const Subtitle = styled.p `
 // width: var(--default-width);
  font-size: 18px;
  /* color: ${props => props.done ? '#8FC549' :'#bababa'} ;//var(--subtitle-color); */
  margin-top: 10px;
  margin-bottom: 28px;
`;