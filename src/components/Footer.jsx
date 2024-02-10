import React from 'react'
import styled from "styled-components"
import directoryImages from '../assets/images/directoryImages';
import { Link } from 'react-router-dom';
const FooterContainer = styled.div`
    width: 100%;
    height: fit-content;
    padding-bottom: 50px;
    background-color: var(--opaque-purple);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 50px;
    font-size: 20px;
    text-transform: capitalize;

    & > div{
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-top: 1px solid black;
    }
    @media (min-width: 640px) {
        flex-direction: row;
        & > div {
            border-top: none;
        }
    }
    @media (min-width: 768px){
        font-size: 20px;

        & > div {
            justify-content: space-around;
        }
    }
    a:hover{
        text-decoration: underline;
        text-decoration-thickness: 1px;
    }
`;
const CentersAttention =styled.div`

    .attention-container{
        margin-top: 10px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-left: 10px;
    }
    `;
const SocialMediaContact = styled.div`

    .social-container{
        height: 80%;
        display: flex;
        flex-wrap: wrap;
        gap: 15px;
        justify-content: center;
        .social-item{
            width: 100px;
            height: fit-content;
            a{
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
            }
        }
    }
`;
const Specialties = styled.div`
    .specialties-container{
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
`;
const Sections = styled.div`
    .sections-container{
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
`

function Footer() {
  return (
    <>
        <FooterContainer>
            <CentersAttention>
                <h4>Atencion</h4>
                <div className='attention-container'>
                    <div className="aristides-footer">
                        <span> Consultorio cuidad: <br />Espacio Salem Arístides <br/> Villanueva 480, mendoza city</span>
                    </div>
                    <div className="changomas-footer">
                        <span> Consultorio Dorrego: <br />Unión Vecinal 4° Barrio Luz y Fuerza <br />Ituzaingó 825 Dorrego, Mendoza</span>
                    </div>
                    <div className="online-footer">
                        <span>Online mediante google meet</span>
                    </div>
                </div>
            </CentersAttention>
            <SocialMediaContact>
                <h4>Redes y Contacto</h4>
                <div className='social-container'>
                    <div className="instagram-footer social-item">
                        <a href="">
                            <img src={directoryImages.instagram} alt="instagram" />
                            <span>Instagram</span>
                        </a>
                    </div>
                    <div className='facebook-footer social-item'>
                        <a href="">
                            <img src={directoryImages.facebook} alt="facebook" />
                            <span>Facebook</span>
                        </a>
                    </div>
                    <div className="whatsapp-footer social-item">
                        <a href="">
                            <img src={directoryImages.whatsapp} alt="whatsapp" />
                            <span>Whatsapp</span>
                        </a>
                    </div>
                    <div className="email-footer social-item">
                        <a href="">
                            <img src={directoryImages.email} alt="email" />
                            <span>Email</span>
                        </a>
                    </div>
                </div>
                
            </SocialMediaContact>
            <Specialties>
                <h4>especialidades</h4>
                <div className="specialties-container">
                    <span>Adulto mayor</span>
                    <div>
                        <span>
                            <Link to={"/consultancy"}>Asesoria</Link>
                            
                        </span>
                    </div>
                </div>
            </Specialties>
            <Sections>
                <h4>Secciones</h4>
                <div className="sections-container">
                    <div className='individual-therapy-footer'>psicoterapia individual</div>
                    <div className="couple-therapy">psicoterapia de pareja</div>
                    <div className='family-therapy'>Psicoterapia Familiar</div>
                    <div className='psychotechnical-examination'> Examen Psicotécnico</div>
                    <div className='psychological-aptitude'>Aptitud Psicológica</div>
                </div>
            </Sections>
        </FooterContainer>
    </>
  )
}

export default Footer