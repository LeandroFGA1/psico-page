import React from 'react'
import styled from 'styled-components'
import data from "../data/sectionsData.json"
import directory from "../assets/images/directoryImages"

const ContactContainer = styled.div`
    width: 100%;
    height: fit-content;
    margin-bottom: 50px;
    h2{
        font-size: 36px;
        margin: 0 10px;
        text-align: center;
        margin-bottom: 80px;
    }
    b{
        transition: all 0.3s ease-in-out;
    }
    b:hover{
        color: var(--purple);
    }
`;
const ItemsContainer = styled.ul`
    display: flex;
    justify-content: center;
    gap: 30px;
    flex-wrap: wrap;
`;
const ItemContact = styled.li`
    list-style: none;
    width: 120px;
    height: 120px;
    background-color: var(--purple);
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: all 0.4s ease-in-out;
    img{
        width: 80px;
        height: 80px;
    }
    &:nth-child(1):hover{
        background-color: #1778F2;
    }
    &:nth-child(2):hover{
        background: #c13584;
    }
    &:nth-child(3):hover{
        background: rgba(244,74,91,1);
    }
    &:nth-child(4):hover{
        background-color: #25d366;
    }
`;

function ContactSection() {
    return (
        <ContactContainer>
            <h2>Si quieres ponerte en <b>contacto</b>  conmigo, te dejo los siguientes medios.</h2>
            <ItemsContainer>
                <ItemContact className='facebook-item'>
                    <a href="">
                        <img src={directory.facebook} alt="facebook icono" />
                    </a>
                    
                </ItemContact>
                <ItemContact className='instagram-item'>
                    <a href=""><img src={directory.instagram} alt="instagram icon" /></a>
                    
                </ItemContact>
                <ItemContact>
                    <a href=""><img src={directory.email} alt="email icon" /></a>
                    
                </ItemContact>
                <ItemContact>
                    <a href="">
                        <img src={directory.whatsapp} alt="whatsapp icon" />
                    </a>
                    
                </ItemContact>
            </ItemsContainer>
            
        </ContactContainer>
    )
}

export default ContactSection