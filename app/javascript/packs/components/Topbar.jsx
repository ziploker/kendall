import React from 'react'
import styled from 'styled-components'



const Wrapper = styled.header`

    background: pink;
    display: flex;
    

`;

const H1 = style.h1`

   

`;

const Nav = style.nav`


`;

const Ul = style.ul`


`;

const Li = style.li`


`;

const A = style.a`


`;

function Topbar() {
    return (
        <Wrapper>
            <H1>LOGO!!</H1>

            <Nav>
                <Ul>
                    <Li><A href="#">Link1</A></Li>
                    <Li><A href="#">Link2</A></Li>
                    <Li><A href="#">Link3</A></Li>
                    <Li><A href="#">Link4</A></Li>

                </Ul>

            </Nav>



        </Wrapper>
    )
}


export default props => <Topbar {...props} />;