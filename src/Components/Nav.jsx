import React from 'react'
import styled from 'styled-components'
import logo from '../images/logo.svg'

const Top = styled.nav`
width: 100%;
`

const NavContainer = styled.div`
padding: 4rem 3rem;
display: flex;
justify-content: space-between;
align-items: center;
@media (max-width: 768px){
    padding: 3rem 2rem;

}
`
const Logo = styled.img`
width: 10rem;
@media (max-width: 768px){
    width: 8rem;


}
`

const Btn = styled.button`
background: none;
border: 1px solid #fd53c0;
color: #fd53c0;
padding: .5rem 1.3rem;
border-radius: 15px;
outline: none;
cursor: pointer;
@media (max-width: 768px){
    padding: .5rem .9rem;

}
`

const Nav = () => {
    return (
        <Top>
            <NavContainer>
                <Logo src={logo}/>
                <Btn>Try it free</Btn>
            </NavContainer>
        </Top>
    )
}

export default Nav
