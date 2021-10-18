import React from 'react'
import styled from 'styled-components'


const IntroSection = styled.section`
width: 100%;
height: 50vh;
`

const Content = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
width: 100%;
margin: 5rem auto;
@media (max-width: 768px){
    width: 90%;
    text-align: center;
}

`

const Heading = styled.h1`
font-size: 2.3rem;
color: #01262f;
margin-bottom: 1rem;
@media (max-width: 768px){
    font-size: 2rem;
}
`

const Lead = styled.p`
width: 35%;
text-align: center;
color: #01262f;
margin-bottom: 1.5rem;
font-weight: 400;
@media (max-width: 768px){
    width: 100%;
margin-bottom: 3rem;

}

`

const Btn = styled.button`
color: white;
padding: 1rem 3.5rem;
border: none;
background-color:#fd53c0;
border-radius: 30px;
font-weight: 600;
cursor: pointer;
box-shadow: 6px 7px 16px -7px rgba(0,0,0,0.55);
@media (max-width: 768px){
padding: .9rem 2.8rem;

}
`

const Intro = () => {
    return (
        <IntroSection>
            <Content>
                <Heading>Build The Community Your Fans Will Love</Heading>
                <Lead> Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.</Lead>
                <Btn>Get Started For Free</Btn>
            </Content>
            
        </IntroSection>
    )
}

export default Intro
