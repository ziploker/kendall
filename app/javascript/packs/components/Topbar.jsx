import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import logoPng from "../../../assets/images/logo.png";
//import welcome from "../../../assets/stylesheets/welcome.scss"
import { gsap } from 'gsap';




const Wrapper = styled.header`

    background: pink;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 30px 7%;
    

    
    
    

`;

const Img = styled.img`
    width: 160px;
    cursor: pointer;
    margin-right: auto;
    transform: translate(30px,-30px);
    opacity: 0;

    


    


`;


const Nav = styled.nav`

    transform: translate(-30px,-30px);
    opacity: 0;
    
    ul{
        
        list-style: none;

        li, a{
            
            font-family: 'Nunito', sans-serif;
            font-weight: 500;
            font-size: 16px;
            
            color: black;
            
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

function Topbar(props){
    
    const logo = React.createRef();
    const navbar = React.createRef();
    
    useEffect( () => {

        gsap.to(logo.current, {x: "0px", y: "0px", opacity: 1, duration: 1});
        gsap.to(navbar.current, {x: "0px", y: "0px", opacity: 1, duration: 1});

    },[]);
    
    
    return (
        <Wrapper>
            
            <Img ref={logo} src={logoPng} alt="company logo" />

            <Nav ref={navbar}>
                <ul>
                    <li><a href="#">Link1</a></li>
                    <li><a href="#">Link2</a></li>
                    <li><a href="#">Link3</a></li>
                    <li><a href="#">Link4</a></li>

                </ul>

            </Nav>



        </Wrapper>
    )
}


export default props => <Topbar {...props} />;