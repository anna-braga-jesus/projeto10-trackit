import styled, { css } from "styled-components";
import Footer from "./Footer";
import Header from "./Header";
import "./styles.css";
import { useContext, useState } from "react";
import axios from "axios";
import { UserContext } from "./App";
function get(token) {
  let promise;
  return (promise = axios.get(
    "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
    { headers: { Authorization: `Bearer ${token}` } }
  ));
}
function post(value, token) {
  let promise;
  const forminha = {
    name: "oi",
    days: [1, 3, 5],
  };
  return (promise = axios.post(
    "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
    value,
    { headers: { Authorization: `Bearer ${token}` } }
  ));
}
function deletey(id, token) {
  let promise;
  return (promise = axios.delete(
    `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`,
    { headers: { Authorization: `Bearer ${token}` } }
  ));
}

export default function Conteudo() {
  const [criarHabitos, setCriarHabitos] = useState("show");
  const [habitList, setHabitList] = useState([]);
  let { token } = useContext(UserContext);

  let showHabits = () => {
    if (criarHabitos === "off") {
      setCriarHabitos("show");
    } else {
      setCriarHabitos("off");
    }
  };
  let processssss = async () => {
    let ret = await get(token);
    return ret;
  };
  processssss().then((b) => {
    setHabitList([...b.data]);
  });

  return (
    <>
      <Header />
      <Container>
          <Title>
            <P>Meus hábitos</P>
            <Add onClick={showHabits}>+</Add>{" "}
          </Title>
        <CriarHabito show={criarHabitos} />
        {habitList.map((a) => {
          return <Habitos idEl={a.id} name={a.name} days={a.days} />;
        })}
      </Container>
      <Footer />
    </>
  );
}
function CriarHabito() {
  let { token } = useContext(UserContext);
  const [name, setName] = useState("");
  const [days, setDays] = useState([]);
  const [clicked, setClicked] = useState({
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
  });

  let d = {
    change_1: () => {
      setClicked({ ...clicked, [0]: !clicked[0] });
      if (!days.includes(0)) {
        days.push(0);
      } else {
        setDays(days.filter((a) => a != 0));
      }
    },
    change_2: () => {
      setClicked({ ...clicked, [1]: !clicked[1] });
      if (!days.includes(1)) {
        days.push(1);
      } else {
        setDays(days.filter((a) => a != 1));
      }
    },
    change_3: () => {
      setClicked({ ...clicked, [2]: !clicked[2] });
      if (!days.includes(2)) {
        days.push(2);
      } else {
        setDays(days.filter((a) => a != 2));
      }
    },
    change_4: () => {
      setClicked({ ...clicked, [3]: !clicked[3] });
      if (!days.includes(3)) {
        days.push(3);
      } else {
        setDays(days.filter((a) => a != 3));
      }
    },
    change_5: () => {
      setClicked({ ...clicked, [4]: !clicked[4] });
      if (!days.includes(4)) {
        days.push(4);
      } else {
        setDays(days.filter((a) => a != 4));
      }
    },
    change_6: () => {
      setClicked({ ...clicked, [5]: !clicked[5] });
      if (!days.includes(5)) {
        days.push(5);
      } else {
        setDays(days.filter((a) => a != 5));
      }
    },
    change_7: () => {
      setClicked({ ...clicked, [6]: !clicked[6] });
      if (!days.includes(6)) {
        days.push(6);
      } else {
        setDays(days.filter((a) => a != 6));
      }
    },
  };
  async function requisição() {
    let oi = await post(
      {
        name: name,
        days: days,
      },
      token
    );
  }
  return (
    <OhNoh>
      <input
        type="text"
        name="habit"
        placeholder="nome do habito"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <Week>
        <Days onClick={d.change_1} active={clicked[0]}>
          S
        </Days>
        <Days onClick={d.change_2} active={clicked[1]}>
          T
        </Days>
        <Days onClick={d.change_3} active={clicked[2]}>
          Q
        </Days>
        <Days onClick={d.change_4} active={clicked[3]}>
          Q
        </Days>
        <Days onClick={d.change_5} active={clicked[4]}>
          S
        </Days>
        <Days onClick={d.change_6} active={clicked[5]}>
          S
        </Days>
        <Days onClick={d.change_7} active={clicked[6]}>
          D
        </Days>
      </Week>
      <div className="botoes">
        <ButtonDelete>Cancelar</ButtonDelete>
        <ButtonSave onClick={requisição}>Salvar</ButtonSave>
      </div>
    </OhNoh>
  );
}
function Habitos(props) {
  let qualquer = useContext(UserContext);
  const [id, setId] = useState(props.idEl);
  const [clicked, setClicked] = useState([...props.days]);
  function request() {
    deletey(id, qualquer.token);
  }
  return (
    <>
        <OhYeah>
      <span>{props.name}</span>
      <Week>
        <Days active={clicked.includes(0) ? true : false}>S</Days>
        <Days active={clicked.includes(1) ? true : false}>T</Days>
        <Days active={clicked.includes(2) ? true : false}>Q</Days>
        <Days active={clicked.includes(3) ? true : false}>Q</Days>
        <Days active={clicked.includes(4) ? true : false}>S</Days>
        <Days active={clicked.includes(5) ? true : false}>S</Days>
        <Days active={clicked.includes(6) ? true : false}>D</Days>
      </Week>
      <button onClick={request}>
        <ion-icon name="trash-outline"></ion-icon>
      </button>
        </OhYeah>
    </>
    
  );
}
const OhYeah = styled.div`
  font-family:'Lexend Deca', sans-serif; 
  width: 90%;
  padding: 20px;
  position: relative;
  color: #DBDBDB;
  background-color: white;
  border-radius: 5px;
  margin: 0 auto 10px auto;
  height: 180px;
  & > div {
    margin-top: 6px;
    display: flex;
    flex-wrap: wrap;
  }
  span {
    font-size: 26px;
  }
  button {
    background-color: transparent;
    border: none;
    outline: none;
    position: absolute;
    top: 10px;
    right: 10px;
    ion-icon {
      font-size: 20px;
    }
  }
`;
const OhNoh = styled.div`
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	width: 90%;
	padding: 20px;
	position: relative;
	background-color: white;
	border-radius: 4px; 
	margin: 0 auto 10px auto;
	input{
		width: 90%;
		height: 48px;
		border: 2px solid #999;
		border-radius: 8px;
	}
	div.botoes {
		display: flex;
		justify-content: flex-end;
		flex-wrap: wrap;
		margin-top: 6px;
	}
	span{
		font-size: 26px;
	}
	
`;
const Days = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => (props.active ? "white" : "#999")};
  background-color: ${(props) => (props.active ? "#999" : "white")};
  width: 32px;
  height: 32px;
  border: 2px solid #999;
  border-radius: 4px;
  margin-right: 4px;
`;
const Container = styled.section`
  overflow-y: scroll;
  height: 90vh;
  display: flex;
  flex-direction: column;
  background-color: #E7E7E7;
  border-radius: 5px;
  input {
    margin: 19px;
    font-size: 20px;
  }
  p {
    margin: 13px 19px;
    font-size: 20px;
  }
  &::-webkit-scrollbar {
    width: 0;
  }
`;
const ButtonDelete = styled.button`
  font-size: 20px;
  font-weight: 200;
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
  font-size: 20px;
  font-weight: 200;
  height: 35px;
  width: 96px;
  border-radius: 4px;
  cursor: pointer;
  background-color: #52b6ff;
  border: #999;
`;
const Lixeira = styled.button`
  
`

const P = styled.p`
  font-size: 23px;
  color: #126ba5;
`;
const Title = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 22px;
  padding: 17px;
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
const Week = styled.div`
  display: flex;
  margin-left: 19px;
`;
