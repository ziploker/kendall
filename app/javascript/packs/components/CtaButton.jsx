import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
//import { gsap } from 'gsap'


//import backgroundVid from '../../../assets/images/backgroundVid.mp4'
///import hero_image from '../../../assets/images/hero_image.jpg'
const Div = styled.div`
    
    //padding-top: 8%;
    //display: inline-block; 
    //margin: auto;
    //position: relative;
    //top 0px;
    //left: 50%;
    //transform: translate(-50%, -50%);
    //margin: 0 auto;
    
    //display: flex;
    //justify-content: center;
    //align-items: center;



`;

/*const A = styled.a`


    color: #494949 !important;
    text-transform: uppercase;
    text-decoration: none;
    background: #ffffff;
    padding: 20px 70px;
    border: 4px solid #494949 !important;
    display: inline-block;
    transition: all 0.4s ease 0s;

    &:hover{

        color: #ffffff !important;
        background: #f6b93b;
        border-color: #f6b93b !important;
        transition: all 0.4s ease 0s;

    }


`;*/

const A = styled.a`
    display: inline-block;
    position: relative;
    margin: 0 auto;
    /*color: #494949 !important;*/
    color: #ffffff !important;
    text-transform: uppercase;
    text-decoration: none;
    /*background: #ffffff;*/
    background: #f6b93b;
    padding: 20px 70px;
    border: 4px solid #494949 !important;
    display: inline-block;
    transition: all 0.4s ease 0s;

    border-color: #f6b93b !important;

    &:hover{

        color: #ffffff !important;
        background: #f7c562;
        border-color: #f6b93b !important;
        transition: all 0.4s ease 0s;

    }


`;

function CtaButton(props){
    
    //const imageRef = React.createRef();
    
    //useEffect( () => {

    //    gsap.to(imageRef.current, {opacity: 1, duration: 1, delay: 1});
        
    //},[]);
   
    return (

        <Div>
            <A href="#" target="_blank" rel="nofollow noopener">Call Us Now</A>
        </Div>
       
           
       
    )
}


export default props => <CtaButton {...props} />;
//export default Hero