
import styled, { css } from 'styled-components'
import profile from './TrackIt.svg'

export default function Topo(){
    return (
        <>
            <TopoComponent>
                <img src={profile} alt="logo-hoje" />
                <ProfileComponent></ProfileComponent>
            </TopoComponent>
            
        </>
    )
}
const TopoComponent = styled.div`
    width: 100%;
    height: 70px;
    background-color: #126BA5;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    /* position: fixed;
    z-index: 1;
    top: 0px; */
    box-shadow: rgba(0, 0, 0, 0.15) 0px 4px 4px;


`
const ProfileComponent = styled.div`
   height: 51px;
    width: 51px;  
    border-radius: 98.5px;
    background-color: pink;
    border: 1px solid white;
    
`
