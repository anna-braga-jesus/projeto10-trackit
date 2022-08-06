import styled, { css } from "styled-components";
import Footer from "./Footer";
import Header from "./Header";
import "./styles.css";
import { useContext, useState } from "react";
import axios from "axios";
import { UserContext } from "./App";
// import { useEffect } from "react";
// import { useContext } from "react";

const CRIARHÁBITO =
    "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
  PEGARHÁBITO =
    "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";

    function getHabit(tokens){
      const CONFIG = { headers: { Authorization: `Bearer ${tokens}` } };
      const promise = axios.get(PEGARHÁBITO, CONFIG)
      .then(
          a => {
              console.log(a);
          }
      )
  }

async function newHabit(value, tokens) {
  const forminha = {
    name: "Nome do hábito",
    days: [1, 3, 5] // segunda, quarta e sexta
  }
  const CONFIG = { body: forminha, headers: { Authorization: `Bearer ${tokens}` } };

  const promise = axios.post(CRIARHÁBITO, CONFIG);
  promise.then(() => {});
}

export default function Conteudo() {
  const [habitsList, setHabitsList] = useState([]);
  const [criarHabitos, setCriarHabitos] = useState("show");
  let qualquer = useContext(UserContext);

  //let habitos = await getHabit()
  getHabit(qualquer.token);
  function showHabits() {
    if (criarHabitos === "off") {
      setCriarHabitos("show");
    } else {
      setCriarHabitos("off");
    }
    console.log("Qualquer coisa");
  }
  return (
    <>
      <Header />
      <Container>
        <div className="eixo">
          <Title>
            {" "}
            <P>Meus hábitos</P> <Add onClick={showHabits}>+</Add>{" "}
          </Title>
        </div>

        <CriarHabito show={criarHabitos} />
      </Container>

      <Footer />
    </>
  );
}
function CriarHabito(props) {
  let qualquer = useContext(UserContext);
  let [dias,setDias] = useState({
    segunda:false, 
    terca:false, 
    quarta:false,
    quinta:false,
    sexta:false, 
    sabado:false, 
    domingo:false
  });
  function Chamamento(){newHabit(undefined,qualquer.tokens)  }
  return (
    
      <div className={props.show}>
        <input type="text" />
        <div className="dias">
          {/* <div onClick={setDias({segunda:!dias['segunda']})}/>
          <div onClick={setDias({terca:!dias['terca']})}/>
          <div onClick={setDias({quarta:!dias['quarta']})}/>
          <div onClick={setDias({quinta:!dias['quinta']})}/>
          <div onClick={setDias({sexta:!dias['sexta']})}/>
          <div onClick={setDias({sabado:!dias['sabado']})}/>
          <div onClick={setDias({domingo:!dias['domingo']})}/> */}
        </div>
        <div className="botoes">
          <button>Cancelar</button>
          <button onClick={Chamamento}>Criar</button>
        </div>
      </div>
    
  );
}
function Habito() {
  return (
    <div>
      <>
        <span></span>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <button>Deletar</button>
      </>
    </div>
  );
}

const Container = styled.section`
  width: 100%;
  overflow-y: scroll;
  height: 100vh;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ButtonService = styled.button`
  color: white;
  height: 35px;
  width: 40px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  background-color: #52b6ff;
`;

const P = styled.p`
  font-size: 23px;
  color: #126ba5;
`;
const Title = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Add = styled.div`
  width: 40px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #52b6ff;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
`;
