import React, {useEffect} from 'react'
import styled from 'styled-components'
import directoryImages from '../assets/images/directoryImages';

const PresentationContainer = styled.section`
    width: 100%;
    height: fit-content;
    padding-bottom: 100px;
    background-color: blanchedalmond;
    overflow: hidden;
    h1{
        width: 100%;
        font-size: 40px;
        text-align: center;
        font-weight: 500;
        padding: 20px 0;
    }
    img{
        
        width: 30%;
        min-width: 250px;
        max-width: 400px;
        height: 40%;
        max-height: 400px;
        float: right;
        margin: 0 10px;
    }
    p{
        font-size: 30px;
        margin: 0 20px;
        padding-bottom: 100px;
    }
    .text-presentation{
        transform: translateY(-30%);
        opacity: 0;
        transition: all 1.5s ease-in-out;
    }
    .text-visible{
        transform: translateY(0);
        opacity: 1;
    }

`;

function Presentation() {  
    useEffect(()=>{
        const handleViewText = (entries)=>{
            entries.forEach((entry)=>{
                const targetElement = entry.target;
                if (entry.isIntersecting){
                    targetElement.classList.add("text-visible")
                }
            })
        }
        const observer = new IntersectionObserver(handleViewText,{
            root:document.querySelector("presentation-container"),
            threshold:0.7,
        });
        document.querySelectorAll('.text-presentation').forEach((element) => {
            observer.observe(element);
        });
        return () => {
            observer.disconnect();
        };
    },[])
    
    return (
        <PresentationContainer className='presentation-container'>
                <h1>Mi nombre es Juanita Pereira</h1>
                <img src={directoryImages.profileExample} alt="imagen de perfil de la psicologa" />
                <p className='text-presentation'>¡Hola! Soy Juanita Pereira, una psicóloga con una amplia experiencia en el campo. A lo largo de mi carrera, he trabajado con diversas comunidades y he ayudado a muchas personas a superar sus desafíos emocionales y mentales.</p>
                
                <p className='text-presentation'>Con más de 10 años en la práctica clínica, me dedico a proporcionar un espacio seguro y comprensivo para que mis clientes exploren sus emociones y encuentren soluciones efectivas. Mi enfoque terapéutico se basa en...</p>
                <p className='text-presentation'>A lo largo de mi carrera, me he especializado en áreas como [menciona tus especialidades]. Mi objetivo es colaborar contigo para alcanzar tus metas y mejorar tu bienestar emocional.</p>

            
            
        </PresentationContainer>
    )
}

export default Presentation