import React from 'react'
import styled ,{keyframes} from 'styled-components'
import directoryImages from '../assets/images/directoryImages';

const spin = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;
const shake = keyframes`
    0%{transform: translateY(0px) rotate(0deg)}
    20%{transform: translateY(10px)}
    40%{transform: rotate(10deg)}
    60%{ transform: rotate(-10deg)}
    80%{transform: translateY(0px) rotate(10deg)}
    100%{transform: translateY(0px) rotate(0deg)}
`;
const ConsultyContainer = styled.div `
    width: 100%;
    height: fit-content;
    margin-bottom: 100px;
    
    h2, h3, p, ul, li, span{
        margin-left: 10px;
        
        margin-bottom: 5px;
        width: 95%;
        
    }
    h2{
        font-size: 30px;
        color: var(--opaque-purple);
        font-weight: 600;
    }
    h3{
        font-size: 26px;
        color: var(--purple);
        font-weight: 500;
    }
    p, ul, span {
        font-size: 20px;
    }
    p{
        width:90%;
    }
    img{
        width: 100%;
        height: 100%;
        float: right;
        
    }
    .consu-img-container{
        position: relative;
        width: 25%;
        min-width: 200px;
        max-width: 400px;
        height: 25%;
        min-height: 200px;
        max-height: 400px;
        float: right;
    }
    .gear-move{
        min-width: 20px;
        max-width: 40px;
        min-height: 20px;
        max-height: 40px;
        width: 10.5%;
        height: 10.5%;
        position: absolute;
        top:5%;
        left: 55%;
        animation: ${spin} 10s linear infinite;
    }
    .gear-two{
        top: 50%;
        left: 10%;
    }
    .gear-three{
        top: 80%;
        left: 70%;
    }
    .bulb-move{
        position: absolute;
        width: 22%;
        min-width: 50px;
        max-width: 140px;
        height: 22%;
        min-height: 50px;
        max-height: 140px;
        top: 40%;
        left: 4%;
        animation: ${shake} 3s linear infinite;
    }
    ul{
    }
    .img-idea{
        float: left;
    }
    @media (min-width:300px ) and (max-width:360px){
        .consu-img-container{
            float: none;
        }
    }

    @media (min-width: 400px){
        h2, h3, p, ul, li, span{
        margin-left: 20px;
        
        margin-bottom: 5px;
        width: 95%;
        
        }
        h2{
            font-size: 36px;
        }
        h3{
            font-size: 30px;
        }
        p, ul, span {
            font-size: 24px;
        }
    }
    @media (min-width: 640px){
        h2, h3, p, ul, li, span{
        margin-left: 30px;
        
        margin-bottom: 5px;
        width: 95%;
        
        }
        h2{
            font-size: 40px;
        }
        h3{
            font-size: 36px;
        }
        p, ul, span {
            font-size: 26px;
        }
    }
    .owo{
        margin-left: 50px;
        height: 300px;
        width: 300px;
        iframe{
            height: 100%;
            width: 100%;
        }
    }
`;


function Consulty() {
  return (
    <ConsultyContainer>
        <h2>Asesoría para Profesionales</h2>
        <div className='consu-img-container'>
            <img src={directoryImages.mind} alt="un cerebro pensando" />
            <img src={directoryImages.gear} alt="engranaje" className='gear-move' />
            <img src={directoryImages.gear} alt="engranaje" className='gear-move gear-two' />
            <img src={directoryImages.gear} alt="engranaje" className='gear-move gear-three' />
        </div>
        
        <p>¡Bienvenido a nuestra sección de asesoría para profesionales que están dando sus primeros pasos en el emprendimiento psicológico! Como psicóloga con experiencia en el establecimiento y crecimiento de prácticas privadas, estoy aquí para compartir contigo mi conocimiento y ayudarte a desarrollar tu propio emprendimiento en el campo de la psicología.
        </p>
        
        <div>
            <h3>Mi Enfoque</h3>
            <p>Mi enfoque en la asesoría es empoderarte para que tomes el control de tu emprendimiento y de tu carrera profesional. Creo en la importancia de aprender de la experiencia y en el poder de la mentoría para el crecimiento personal y profesional.</p>
            <h3>¿Por qué elegirme como tu mentora?</h3>
            <ul>
                <div className='consu-img-container img-idea'>
                    <img src={directoryImages.mindIdea} alt="una idea" />
                    <img src={directoryImages.bulb} alt="foco" className='bulb-move' />
                </div>
                
                
                <li><b>Experiencia personal:</b> Como psicóloga con una práctica privada exitosa, comprendo los desafíos y las oportunidades únicas que enfrentan los profesionales en el campo del emprendimiento psicológico.
                </li>
                <li><b>Compromiso con tu éxito:</b> Mi objetivo es ayudarte a alcanzar tus metas empresariales y profesionales, proporcionándote el apoyo y la orientación que necesitas en cada paso del camino.
                </li>
                <li><b>Enfoque personalizado:</b> Mi asesoría se adapta a tus necesidades y objetivos individuales, brindándote una atención personalizada y centrada en tus metas específicas.
                </li>
            </ul>
        </div>

        <p>¡Comienza tu Viaje Empresarial con Confianza!
        No tienes que recorrer el camino hacia el éxito empresarial solo/a. Estoy aquí para ayudarte a navegar por los desafíos y celebrar los triunfos juntos/as. Ponte en contacto conmigo hoy mismo para programar una consulta inicial y dar el primer paso hacia un emprendimiento psicológico exitoso y gratificante.</p>
    </ConsultyContainer>
)
}

export default Consulty