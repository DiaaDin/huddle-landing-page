import React from 'react'
import styled from 'styled-components'
import {AiFillFacebook,AiOutlineTwitter,AiOutlineInstagram} from 'react-icons/ai'
import Phoneimg from '../images/icon-phone.svg'
import Message from '../images/icon-email.svg'
import Lg from '../images/FooterLogo.png'
import FooterCurveImg from '../images/bg-footer-top-desktop.svg'

const FooterSection = styled.section`
width:100%;
display: flex;
flex-direction: column;
`
const FooterCurve = styled.img`
width:100%;
`
const FooterContainer = styled.div`
width:100%;
display: flex;
justify-content: space-between;
background-color: hsl(192, 100%, 9%);
padding: 2rem;
@media (max-width: 768px){
flex-direction: column-reverse;
align-items: center;
}
`
const Left = styled.div`
display: flex;
text-align:center;
align-items: center;
justify-content: center;
flex-direction: column;
width: 30%;
@media (max-width: 768px){
width: 90%;
}
`
const Logo = styled.img`
width: 8rem;
margin: 0 auto;
margin-bottom: 1rem;
`
const Lead = styled.p`
color: #FFF;
margin-bottom: 2rem;
width: 60%;
@media (max-width: 768px){
width: 80%;
text-align: center;
}
`
const Contact = styled.div`
display: flex;
flex-direction: column;
align-items: center;
@media (max-width: 768px){
width: 80%;
}
`
const Phone = styled.div`
display: flex;
margin-bottom: 1rem;

`
const PhoneIcon = styled.img`
width: 1.2rem;
height: 1rem;
margin-right: 1rem;
`
const Number = styled.span`
color: #FFF;
`
const Email = styled.div`
margin-bottom: 1rem;
`
const EmailIcon = styled.img`
width: 1.2rem;
height: 1rem;
margin-right: 1rem;
`
const Adress = styled.span`
color: #FFF;
`
const Social = styled.div``
const Facebook = styled(AiFillFacebook)`
color: #FFF;
margin-right: .5rem;
cursor: pointer;
font-size: 1.5rem;
`
const Instagram = styled(AiOutlineInstagram)`
color: #FFF;
margin-right: .5rem;
cursor: pointer;
font-size: 1.5rem;
`
const Twitter = styled(AiOutlineTwitter)`
color: #FFF;
cursor: pointer;
font-size: 1.5rem;
`
const Right = styled.div`
width: 40%;
@media (max-width: 768px){
width: 100%;
text-align:center;
display: flex;
flex-direction: column;
justify-content: center;
margin-bottom: 2rem;
}

`
const Content = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
@media (max-width: 768px){

align-items:center;
}
`
const Title = styled.h3`
color: #FFF;
margin-bottom: 1rem;
`
const Desc = styled.p`
color: #FFF;
margin-bottom: 1rem;
width: 60%;
@media (max-width: 768px){
width: 65%;
text-align:center;
}
`
const Inputs = styled.div``
const InputField = styled.input`
padding: .5rem;
border-radius: 10px;
margin-right: 1rem;
border: none;
outline: none;
width: 60%;
@media (max-width: 768px){
margin: 0 0 1rem 0;
}

`
const Btn = styled.button`
padding: .5rem 2rem;
border-radius: 10px;
background-color:#fd53c0;
color: #FFF;
@media (max-width: 768px){
width: 60%;
}
`

const Footer = () => {
    return (
        <FooterSection>
            <FooterCurve src={FooterCurveImg}/>
            <FooterContainer>
                <Left>
                    <Logo src={Lg}/>
                    <Lead>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nulla quam, hendrerit lacinia vestibulum a, ultrices quis sem.</Lead>
                    <Contact>
                            <Phone>
                                   <PhoneIcon src={Phoneimg}/>
                            <Number>Phone: +1-543-123-4567</Number>
                            </Phone>
                         
                      
                            <Email>
                                <EmailIcon src={Message}/>
                            <Adress>example@huddle.com</Adress>
                            </Email>
                            
                       
                    </Contact>
                    <Social>
                        <Facebook/>
                        <Instagram/>
                        <Twitter/>
                    </Social>
                </Left>
                <Right>
                    <Content>
                        <Title>NEWSLETTER</Title>
                         <Desc>To recieve tips on how to grow your community, sign up to our weekly newsletter. We’ll never send you spam or pass on your email address</Desc>
                    </Content>
                    <Inputs>
                        <InputField/>
                        <Btn>Subscribe</Btn>
                    </Inputs>
                </Right>
            </FooterContainer>
        </FooterSection>
    )
}

export default Footer
