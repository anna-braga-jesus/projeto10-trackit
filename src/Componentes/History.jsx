import styled from 'styled-components';
import Footer from './Footer';
import Header from './Header'
import Topo from './Topo';

function History(){
  return (
    <>
      <Topo/>
      <Header />
      <Container>
      <Title>Histórico</Title>
      <Subtitle>Em breve você poderá ver o histórico dos seus hábitos aqui!</Subtitle>
      </Container>
      <Footer />
     
    </>
  );
}

const Container = styled.section`
	width: 100%;
	height: calc(100vh-100px);
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin: 100px auto;

  
`;

const Title = styled.p `
  width: 100px;
  font-size: 23px;
  color: #126BA5;
  padding: 20px;

`;

const Subtitle = styled.p `
  width: 338px;
  font-size: 18px;
  color: #666666;
  margin-top: 10px;
  margin-bottom: 28px;
  padding: 20px;
`;

export default History;