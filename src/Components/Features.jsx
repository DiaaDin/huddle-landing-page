import React from 'react'
import topbg from '../images/bg-section-top-desktop-1.svg'
import botbg from '../images/bg-section-bottom-desktop-1.svg'
import topbg2 from '../images/bg-section-top-desktop-2.svg'
import botbg2 from '../images/bg-section-bottom-desktop-2.svg'
import grow from '../images/illustration-grow-together.svg'
import conv from '../images/illustration-flowing-conversation.svg'
import users from '../images/illustration-your-users.svg'
import styled from 'styled-components'



const FeaturesSection = styled.section`
width: 100%;
margin-top: 3rem;
`
const FeaturesContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
`
const FeatureOne = styled.div`
width: 100%;
display: flex;
align-items:center;
flex-direction: column;
`
const FeatureTwo = styled.div`
width: 100%;
display: flex;
flex-direction: column;
`
const FeatureThree = styled.div`
width: 100%;
display: flex;
flex-direction: column;
`
const TopBg = styled.img`
width: 100%;
`
const Container = styled.div`
display: flex;
align-items: center;
background-color: hsl(207, 100%, 98%);
@media (max-width: 768px){
    flex-direction: column-reverse;
}
`
const ContainerTwo = styled.div`
display: flex;
align-items: center;
flex-direction: row-reverse;
@media (max-width: 768px){
    flex-direction: column;
}
`

const Content = styled.div`
flex:1;
margin-left: 3rem;

@media (max-width: 768px){
    display: flex;
flex-direction: column;
align-items: center;
}
`
const Title = styled.h2`
font-size: 2rem;
margin-bottom: 1.5rem;
color: #01262f;

`
const Lead = styled.p`
width: 60%;
font-size: 1rem;
color: #01262f;

`
const FeatureImage = styled.img`
width: 40%;
margin-right: 3rem;
@media (max-width: 768px){
width: 70%;
margin-right: 0;
margin-bottom: 2rem;
}
`
const FeatureTwoImage = styled.img`
width: 40%;
margin-right: 3rem;
@media (max-width: 768px){
width: 70%;
margin-right: 0;
margin-top: 2rem;
}
`

const BotBg = styled.img`
width: 100%;
`
const FeaturesContent = styled.div`
width:100%;
height: 40vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

const Heading = styled.h1`
font-size: 1.6rem;
color: #01262f;
margin-bottom: 1rem;
@media (max-width: 768px){
    font-size: 1.1rem;
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
padding: .6rem 1.6rem;

}
`



const Features = () => {
    return (
        <FeaturesSection>
            <FeaturesContainer>
            <FeatureOne>
                <TopBg src={topbg}/>
                    <Container>
                        <Content>
                            <Title>Grow Together</Title>
                            <Lead>Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form.</Lead>
                        </Content>
                        <FeatureImage src={grow}/>
                    </Container>
                <BotBg src={botbg}/>
                </FeatureOne>
                <FeatureTwo>
                    <ContainerTwo>
                        <Content>
                            <Title>Flowing Conversations</Title>
                            <Lead>You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow.</Lead>
                        </Content>
                        <FeatureTwoImage src={conv}/>
                    </ContainerTwo>
                </FeatureTwo>
                <FeatureThree>
                <TopBg src={topbg2}/>
                    <Container>
                        <Content>
                            <Title>Your Users</Title>
                            <Lead>It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately.</Lead>
                        </Content>
                        <FeatureImage src={users}/>
                    </Container>
                <BotBg src={botbg2}/>
                </FeatureThree>
            </FeaturesContainer>
            <FeaturesContent>
                <Heading>Ready To Build Your Community?</Heading>
                <Btn>Get Started For Free</Btn>
            </FeaturesContent>
        </FeaturesSection>
    )
}

export default Features
