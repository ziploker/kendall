import React, {useEffect, useState} from 'react'
import styled from 'styled-components'

import cloudIcon from '../../../assets/images/cloudComputing.svg'
import laptopIcon from '../../../assets/images/laptop.svg'
import networkIcon from '../../../assets/images/big-data.svg'
import shieldIcon from '../../../assets/images/shield.svg'





const Section = styled.section`

    //background: rgb(136,189,188);
    //background: radial-gradient(circle, rgba(136,189,188,1) 0%, rgba(158,190,189,0.9612044646960347) 41%);
    background: white;
    //height: 100vh;
    //min-height: 400px;
    
    padding: 50px;
    display: grid;

    grid-template-columns: minmax(250px, 1fr);
    grid-column-gap: 1rem;
    grid-row-gap: 2rem;
    justify-content: space-evenly;
    //grid-template-columns: repeat(auto-fill, minmax(240px, 350px));
    //justify-items: center;
    //align-items: center;
    //grid-gap: 1rem;

    @media screen and (min-width: 540px){
        
        grid-template-columns: minmax(250px, 350px) minmax(250px, 350px); 
        
    
    }

    @media screen and (min-width: 1111px){
        grid-template-columns: minmax(250px, 350px) minmax(250px, 350px) minmax(250px, 350px) minmax(250px, 350px); 
    
    }


`;

const Div = styled.div`

    min-height: 350px;
    width: 100%;
    //background: #848991;
    border: 1px solid pink;
    display: flex;
    //justify-content: flex-start;
    align-items: flex-start;
    //position: relative;
    border-radius: 10px;


`;

const Img = styled.img`

width: 40px;
height: 40px;
//margin: 0 auto;
   
    

`;

const Banner = styled.div`
    background: #F6B93B;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 0px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;

`;

function MidSection(props){
    
   
    return (

        <Section>

            <Div>
                <Banner>
                    <Img src={cloudIcon}></Img>
                </Banner>
            </Div>

            <Div>
                <Banner>
                    <Img src={laptopIcon}></Img>
                </Banner>
            </Div>
            <Div>
                <Banner>
                    <Img src={networkIcon}></Img>
                </Banner>
            </Div>
            <Div>
                <Banner>
                    <Img src={shieldIcon}></Img>
                </Banner>
            </Div>



        </Section>
       
            //<Video src={backgroundVid} autoPlay muted loop>
            //<source type="video/mp4"></source>

            //ERROR (get a new browser)


            //</Video>
       
    )
}


//export default props => <Hero {...props} />;
export default MidSection