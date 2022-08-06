
import styled, { css } from 'styled-components'
import React, {useContext} from 'react';
import { UserContext } from './App';
//import profile from './TrackIt.svg'

export default function Topo(context){
    let oi = useContext(UserContext);
    return (
        <>
            <TopoComponent>TrackIt
                <ProfileComponent>
                    <img className="Perfil" src={oi.user.image}/>
                </ProfileComponent>
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
    justify-content: space-around;
    padding: 20px;
     /* position: fixed;
    z-index: 1;
    top: 0px;  */
    box-shadow: rgba(0, 0, 0, 0.15) 0px 4px 4px;
    font-family: 'Playball', cursive;
    font-size: 39px;
    font-weight: 400;




`
const ProfileComponent = styled.div`
   height: 51px;
    width: 51px;  
    border-radius: 50%;
    background-color: pink;
    border: 1px solid white;
   
    
`
