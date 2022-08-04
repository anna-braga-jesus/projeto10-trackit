import styled, { css } from 'styled-components'

export default function Footer(){
    return (
        <>
        <FooterComponent>Hábitos</FooterComponent>
        </>
    )
}

const FooterComponent = styled.div`
    background-color: red;
    width: 100%;
    height: 70px;
    font-size: 26px;
    display: flex;
    position: fixed;
    z-index: 1;
    background-color: white;
    bottom: 0;
    border: 1px solid #9eadba;
    `