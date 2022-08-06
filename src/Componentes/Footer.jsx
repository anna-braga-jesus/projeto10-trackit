import styled, { css } from 'styled-components'
import './styles.css'
import circulo from './Group 9.svg'
import { Link } from 'react-router-dom'

export default function Footer(){
    return (
        <>
        <FooterComponent>
            <Link to="/habitos">
            <p>Hábitos</p> 
            </Link>
           
            <CircleComponent>
                <Link to="/hoje">
                <p className='texto-circulo'>Hoje</p>
                 {/* <img className='circulo-hoje' src={circulo} alt="circulo" />  */}
                </Link>
                
            </CircleComponent>
            <Link to="/historico">
            <p>Histórico</p>
            </Link>
           
            </FooterComponent>

        </>
    )
}

const FooterComponent = styled.div`
width: 480px;
    background-color: red;
    height: 70px;
    font-size: 26px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    z-index: 1;
    background-color: white;
    color: #52B6FF;
    bottom: 0;
    border: 1px solid #9eadba;

    `
const CircleComponent = styled.div`
    width: 91px;
    height: 91px;
    background: #52B6FF;
    border-radius: 50%;
    color: #FFFFFF;
    justify-content: center;
    align-items: center;
    margin-bottom: 70px;
    display: flex;
    position: absolute;

` 