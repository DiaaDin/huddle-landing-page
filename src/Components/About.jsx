import React from 'react'
import Screen from '../images/screen-mockups.svg'
import Msg from '../images/icon-messages.svg'
import people from '../images/icon-communities.svg'
import styled from 'styled-components'

const AboutSection = styled.section`
width: 100%;

`

const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`
const AboutImage = styled.img`
width: 60%;
margin-bottom: 3rem;
@media (max-width: 768px){
    width: 90%;

}
`
const Content = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 70%;
`
const ContentContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 80%;
z-index:2;
@media (max-width: 768px){
    flex-direction: column;
}
`
const ContentInfo = styled.div`
display: flex;
flex-direction: column;
@media (max-width: 768px){
    margin-bottom:3rem;
}
`
const ContentImage = styled.img`
width: 2rem;
`
const Number = styled.h2`
font-size: 3rem;
color: #01262f;

`
const Name = styled.span`
text-align: center;
font-size: .8rem;
color: #777777;
`

const About = () => {
    return (
        <AboutSection>
            <Container>
                <AboutImage src={Screen}/>
                <Content>
                    <ContentContainer>
                    <ContentInfo>
                            <ContentImage src={people}/>
                            <Number>1.4k+</Number>
                            <Name>Communities Formed</Name>
                        </ContentInfo>
                        <ContentInfo>
                            <ContentImage src={Msg}/>
                            <Number>2.7m+</Number>
                            <Name>Messages Sent</Name>
                        </ContentInfo>
                    </ContentContainer>
                </Content>
            </Container>
            
        </AboutSection>
    )
}

export default About
