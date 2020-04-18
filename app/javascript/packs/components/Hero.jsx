
import React, {useEffect, useState} from 'react'
import styled, {css} from 'styled-components'
import { gsap } from 'gsap'
import CtaButton from "./CtaButton"
import hero_image from '../../../assets/images/hero_Attempt_two.jpg'

import miami_video from '../../../assets/images/clouds.mp4'
//import miami_screenshot from '../../../assets/images/cloudy.jpg'
import '../../../assets/stylesheets/welcome.scss'


const Video = styled.video`
    
    position: absolute;
    z-index:-1;
    right: 0;
    bottom: 0;
    top: 0;
    min-width: 100%;
    

    
    @media screen and (min-width: 1000px){ 
            width: 100%;
            height: auto;
    }

    @media screen and (max-width: 1000px){ 
            width: auto;
            height: 100%;
    }

    

`;

const Section = styled.section`
    box-sizing: border-box;
    //background: rgb(136,189,188);
    //background: radial-gradient(circle, rgba(136,189,188,1) 0%, rgba(158,190,189,0.9612044646960347) 41%);
    //height: 100vh;
    min-height: 500px;
    width: 100%;
    //background-image: url(${hero_image});
    position: relative;
    //background-size: contain;
    //background-position: center center;
    //background-repeat: no-repeat;
    opacity: 1;
    height: 100%;
`;
const Center = styled.img`

    



`;
const Img = styled.img`

    
    
    
    
    
   
    
    width: 100vw;
    
    

    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;


`;

const H1 = styled.h1`

    font-size: 2.3em;
    /*letter-spacing: -1px;*/
    text-align: center;
    margin: 0;
    color: white;
    //white-space: nowrap;
    //padding: 8% 0px 20px 20px;
    
    
    @media (max-aspect-ratio: 16/9){

        //padding-top: 16%;
        font-size: 2rem
    }
    
    

`;

const VR = styled.div`

    position: absolute;
    margin-top: 43px;
    //left:0;
    height: 36%;
    width: 100%;
    display: flex;
    flex-direction: column;
    
    justify-content: space-evenly;
    align-items: center;


`;

const VR2 = styled.div`

    position: absolute;
    bottom:0;
    left:0;
    height: 64%;
    width: 100%;
    display: flex;
    flex-direction: column;
    
    justify-content: center;
    align-items: center;


`;

const VROverlay = styled.div`

    position: absolute;
    top:0;
    left:0;
    height: 100%;
    width: 100%;
    
    opacity: .4;
    background-color: black;


`;

const H3 = styled.h3`

    
    margin: 0px;
    //padding-top: 4.3%;
    text-align: center;
    font-size: 1.5rem;
    color: white;
    //white-space: nowrap;
    @media (max-aspect-ratio: 16/9){

        
        font-size: 1.2rem
    }

`;
/*const Button = styled.button`
    border: 0;
    
    border-radius: 5px;
    //font-size: 2em;
    width: 350px;
    background-color: #FF9900;
    cursor: pointer;
    //padding: 10px 20px;
    white-space: nowrap;
    //text-align: center;
    //position: absolute;
    //top: 45%;
    //left: 50%;
    //transform: translate(-50%, -50%);
    color: white;
    white-space: nowrap;


    &:hover{

        background-color: orangered;
        
    }

   
    &::-moz-focus-inner {
        border: 0;
    }

`;
*/


const Hero = (props) => {
    
    const imageRef = React.createRef();
    
    useEffect( () => {

        //gsap.to(imageRef.current, {opacity: 1, duration: 1, delay: 1});
        
    },[]);
   
    return (

        <Section ref={imageRef} >

            <Video src={miami_video} autoPlay muted loop>
                <source type="video/mp4"></source>

                ERROR (get a new browser)


            </Video>
            <VROverlay>
            </VROverlay>
                
                
                <VR>
                    <H1>IT SERVICES MADE SIMPLE</H1>
                    
                    <H3> Affordible flat rate IT soulutions that you can trust.   </H3>
                    
                    
                </VR>

                <VR2>
                    <CtaButton />
                </VR2>
           



        </Section>
       
            
       
    )
}


export default props => <Hero {...props} />;
//export default Hero