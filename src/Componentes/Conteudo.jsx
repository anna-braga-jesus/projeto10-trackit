import styled, { css } from 'styled-components'
import Footer from './Footer'

export default function Conteudo(){
    return (
        <>
        <BoxConteudo>
        <ConteudoComponent>Meus hábitos</ConteudoComponent>
        <ButtonService>+</ButtonService>
        </BoxConteudo>
        <TextoInicial>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</TextoInicial>
        
        <Footer />

        </>
    )
}
const BoxConteudo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
`


const ConteudoComponent = styled.p`
    width: 148px;
    height: 29px;
    font-size: 23px;
    font-weight: 400;
    font-family:'Lexend Deca', sans-serif; 
    color: #126BA5;
    margin-top: 10px;
margin-bottom: 28px;
    
`
const ButtonService = styled.button`
    color: white;
    background-color: #52B6FF;
    height: 35px;
    width: 40px;
    border-radius: 4px;
    border: none;

`
const TextoInicial = styled.div`
height: 74px;
width: 338px;
border-radius: nullpx;
font-size: 23px;
font-weight: 400;
font-family:'Lexend Deca', sans-serif; 
margin: 0 auto;
color: #666666;


`