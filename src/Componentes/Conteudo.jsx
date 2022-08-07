import styled, { css } from "styled-components";
import Footer from "./Footer";
import Header from "./Header";
import "./styles.css";
import { useContext, useState } from "react";
import axios from "axios";
import { UserContext } from "./App";
// import { useEffect } from "react";



export default function Conteudo() {
  const [criarHabitos, setCriarHabitos] = useState("show");
  const { token } = useContext(UserContext);
  console.log(token);
  let { qualquer } = useContext(UserContext);
  const [entrada, setEntrada] = useState("");

  // function getHabit() {

  //   const pegarhabito = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
  //   const config = { headers: { Authorization: `Bearer ${token}` } };
  //   const promise = axios.get({pegarhabito},{name:'oi', days:[1,2]}, config).then((a) => {
  //     console.log(a);
  //   });
  // }

  //let habitos = await getHabit()
  // getHabit(qualquer.token);
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
function CriarHabito({show ,e, token,entrada,setEntrada }) {
  let { qualquer } = useContext(UserContext);
  let [dias, setDias] = useState({
    segunda: false,
    terca: false,
    quarta: false,
    quinta: false,
    sexta: false,
    sabado: false,
    domingo: false,
  });
  //  function Chamamento() {
  //    HabitoNovo(undefined, qualquer.token);
  // }
  function HabitoNovo({entrada, setEntrada }) {

    e.preventDefault();
    const [habitsList, setHabitsList] = useState([]);

    const criarhabito =
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
    const forminha = {
      name: entrada,
      days: [1, 3, 5], // segunda, quarta e sexta
    };
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    const promise = axios.post({ criarhabito }, forminha, config);
    promise.then((response) => {
      setHabitsList(response.data);
      console.log("Deu certo!");
    });
  }
  return (
    <Container>
      <form onSubmit={HabitoNovo}>
        <div className={show}>
          <input
            type="text"
            name="habit"
            value={entrada}
            placeholder="nome do habito"
            onChange={(e) => {
              setEntrada(e.target.value);
            }}
          />
          <div className="dias">
            <Week>
              <Day> D </Day>
              <Day> S </Day>
              <Day> T </Day>
              <Day> Q </Day>
              <Day> Q </Day>
              <Day> S </Day>
              <Day> S </Day>
            </Week>

            {/* <div onClick={setDias({segunda:!dias['segunda']})}/>
          <div onClick={setDias({terca:!dias['terca']})}/>
          <div onClick={setDias({quarta:!dias['quarta']})}/>
          <div onClick={setDias({quinta:!dias['quinta']})}/>
          <div onClick={setDias({sexta:!dias['sexta']})}/>
          <div onClick={setDias({sabado:!dias['sabado']})}/>
          <div onClick={setDias({domingo:!dias['domingo']})}/> */}
          </div>
          <div className="botoes">
            <ButtonDelete>Cancelar</ButtonDelete>
            <ButtonSave type="submit">Salvar</ButtonSave>
          </div>
        </div>
      </form>
    </Container>
  );
}

function Habito() {
  const [clicked, setClicked] = useState({
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
  });

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
  height: 91px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 5px;
  margin-top: 20px;
  input {
    margin: 19px;
    font-size: 20px;
  }
  p {
    margin: 13px 19px;
    font-size: 20px;
  }
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
const ButtonDelete = styled.button`
  height: 35px;
  border-radius: 8px;
  cursor: pointer;
  background-color: #52b6ff;
  width: 96px;
  border: #999;
  color: dodgerblue;
  background-color: transparent;
`;
const ButtonSave = styled.button`
  color: white;
  height: 35px;
  width: 96px;
  border-radius: 4px;
  cursor: pointer;
  background-color: #52b6ff;
  border: #999;
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
const Day = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  margin-right: 4px;
  cursor: pointer;
`;
const Week = styled.div`
  display: flex;
  margin-left: 19px;
`;
const Delete = styled.button`
  width: 35px;
  height: 35px;
  background: #fff;
  border-radius: 5px;
  color: var(--text-color);
  border: none;
  font-size: 20px;
  cursor: pointer;
  bottom: 55px;
  right: -100px;
  position: absolute;
`;
