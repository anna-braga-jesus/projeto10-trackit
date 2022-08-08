import styled from 'styled-components'

export default function Button(){
    return (
        <ButtonComponent>Entrar</ButtonComponent>
    )
}
const ButtonComponent = styled.button`
    height: 45px;
    width: 303px;
    border-radius: 4.6px;
    background-color: #52B6FF;
    color: #FFFFFF;
    /* font-family: Lexend Deca; */
    font-size: 21px;
    font-weight: 400;
    text-align: center;
    margin-top: 26px;
    margin-bottom: 25px;
    border: none;

    &:hover{
        cursor: pointer;
    }
` 
