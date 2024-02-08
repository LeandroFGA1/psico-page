import React, {useState} from 'react'
import styled from "styled-components"
import ToggleMenu from './ToggleMenu'
import { Link } from 'react-router-dom';
const HeaderContent = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    position: fixed;
    background-color: var(--opaque-purple);
    background-color: transparent;
    backdrop-filter: blur(10px);
    box-shadow: 0px 0px 1px black;
    z-index: 10;
    label{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    a{
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    input:checked ~ .navbar{
        display: block;
    }
    input:checked ~ label{
        .line1,
        .line3 {
        stroke-dasharray: 100, 200;
        stroke-dashoffset: -124;
        }
        .line2 {
        stroke-dashoffset: 57;
        }
    }
    @media (min-width: 640px) {
    label{
        display: none;
    }
    nav{
        top: 0;
        left: 0;
        width: 60%;
        position: relative;
        display: flex;
        background-color: var(--opaque-purple);
        background-color: transparent;
    }
    input:checked ~ .navbar{
        display: flex;
        background-color: transparent;
    }
    @media (min-width: 768px) {
            nav{
                width: 50%;
                margin-left: -200px;
            }
    }

    /* Para el breakpoint lg (1024px) */
    @media (min-width: 1024px) {
    /* ... Estilos para el breakpoint lg ... */
        nav{
            margin-left: -400px;
            width: 40%;
        }
    }

    /* Para el breakpoint xl (1280px) */
    @media (min-width: 1280px) {
    /* ... Estilos para el breakpoint xl ... */
    }

    /* Para el breakpoint 2xl (1536px) */
    @media (min-width: 1536px) {
    /* ... Estilos para el breakpoint 2xl ... */
    }
}
`;
const Navbar = styled.nav`
    position: absolute;
    top: 60px;
    left: 0%;
    width: 100%;
    height: fit-content;
    display: none;
    justify-content: space-around;
    background-color: var(--purple);
`;
const LogoContainer = styled.div`
    width: 100px;
    img{
        height: 50px;
        width: 50px;
        margin: 0 15px;
    }
`;
const ConsultancyContainer = styled.div`
    width: 100px;
    span{
        height: 100%;
        margin: 0 15px;

    }
    &:hover{
            background-color: var(--orange);
            transition: all 0.3s ease-in-out;
        }
`;
const NavItem = styled.div`
    height: 100%;
    height: 60px;
    transition: all 0.3s ease-in-out;
    &::after{
        content: "";
        display: block;
        width: 0;
        height: 2px;
        background-color: transparent;
        transition: width 0.3s ease-in-out;
        margin-top: -15px;
    }
    
    &:hover::after {
        background-color: black;
    }

    &:hover::after {
        width: 100%;
    }
    
    @media (min-width: 640px){
        &:hover{
            
        }
    }
`;



function Header() {
    const [isChecked, setIsChecked] = useState(false);
    const handleLinkClick = () => {
        if (isChecked) {
          // If the input is checked, uncheck it
            setIsChecked(false);
        }
    };
    const scrollToHero = () => {
        const heroSection = document.getElementById('hero');
        if (heroSection) {
            heroSection.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        
        <HeaderContent>
            <LogoContainer className='flex justify-center items-center'>
                <a href="">
                    <img src="#" alt="logo" />
                </a></LogoContainer>
            <input type="checkbox" name="toggle-menu" id="toggle-menu" className='hidden ' checked={isChecked}
                onChange={() => setIsChecked(!isChecked)} />
            <label htmlFor="toggle-menu">
                <ToggleMenu/>
            </label>
            <Navbar className='navbar' >
                <NavItem><Link to={"/"} onClick={() => { scrollToHero(); handleLinkClick(); }}>Inicio</Link> </NavItem>
                <NavItem><Link to={"/profile"} onClick={handleLinkClick}>Perfil</Link></NavItem>
                <NavItem><Link to={"/therapy"} onClick={handleLinkClick}>Terapia</Link></NavItem>
                <NavItem><Link to={"/contact"} onClick={handleLinkClick}>Contacto</Link></NavItem>
            </Navbar>
            <ConsultancyContainer className='flex justify-center items-center'>
                <span><Link to={"/consultancy"}>asesoria</Link></span></ConsultancyContainer>
        </HeaderContent>
    )
}

export default Header