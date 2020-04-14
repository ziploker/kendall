import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import logoPng from "../../../assets/images/logo.png"
//import welcome from "../../../assets/stylesheets/welcome.scss"
import { gsap } from 'gsap'

import backgroundVid from '../../../assets/images/backgroundVid.mp4'

import GlobalStyles from "./global"
import Burger from './burger'
import Menu from './menu'

const Wrapperr = styled.header`

    //box-sizing: border-box;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0px 13%;
    //background: gray;
    height: 80px;
    border-bottom: 1px solid gray;
    
    
`;

const Img = styled.img`
    width: 222px;
    cursor: pointer;
    margin-right: auto;
    transform: translate(30px,-30px);
    opacity: 0;

    


    


`;


const Nav = styled.nav`
    @media only screen and (max-width: 850px){
    
       display: none     

    }   
    transform: translate(-30px,-30px);
    opacity: 0;
    
    ul{
        
        list-style: none;

        li, a{
            
        
            font-weight: 500;
            font-size: 16px;
            
            color: orangered;
            
            text-decoration: none;
        
        
        }
    
        li{
            display: inline-block;
            padding: 0px 20px;

        
            a{
                transition: all 0.3s ease 0s;

                &:hover{

                    color: gray;

                }
            
            }
        
        }
    
    
    
    }
    
    

`;





function Topbar({open, setOpen}){
    
    const logo = React.createRef();
    const navbar = React.createRef();
    
    useEffect( () => {

        gsap.to(logo.current, {x: "0px", y: "0px", opacity: 1, duration: 1});
        gsap.to(navbar.current, {x: "0px", y: "0px", opacity: 1, duration: 1});

    },[]);
    
    
    return (
        <Wrapperr>
                
            <Img ref={logo} src={logoPng} alt="company logo" />

            <Nav ref={navbar}>
                <ul>
                    <li><a href="#">Link1</a></li>
                    <li><a href="#">Link2</a></li>
                    <li><a href="#">Link3</a></li>
                    <li><a href="#">Link4</a></li>

                </ul>

            </Nav>

            

            <Burger open={open} setOpen={setOpen}/>

           

        </Wrapperr>
    )
}


export default props => <Topbar {...props} />;