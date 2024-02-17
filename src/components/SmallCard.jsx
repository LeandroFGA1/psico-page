import React from 'react'
import styled from 'styled-components'
import directoryImages from "../assets/images/directoryImages"
import { Link } from 'react-router-dom';

const CardContainer = styled.div`
    position: relative;
    width: 25%;
    cursor: pointer;
    min-width: 260px;
    max-width: 400px;
    height: 50vh;
    min-height: 380px;
    max-height: 500px;
    border-radius: 10px;
    box-shadow: 0 0 5px black;
    background-image: url(${props => props.bgImage});
    background-size: 50%;
    background-repeat: no-repeat;
    background-position: center;
    background-color: var(--opaque-purple-transparent);
    display: flex;
    flex-direction: column-reverse;
    .overlay{
        cursor: context-menu;
        width: 100%;
        height: 0%;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        backdrop-filter: blur(10px);
        transition: all 0.5s ease-in-out;
        text-align: center;
        justify-content: space-around;
        box-shadow: 0 0 10px var(--opaque-purple);
        .title-card{
            .title-line-card{
                width: 50%;
                height: 5px;
                background-color: var(--orange);
                transition-delay: 0.8s;
                transform: translateX(-110%);
            }
        }
        h3,p,a,.title-line-card{
            transition: all 0.5s ease-in;
        }
        h3{
            transform: translateX(-100%);
            font-size: 40px;
            transition-delay: 0.5s;
            font-weight: 600;
            text-transform: capitalize;
            
        }
        p{
            transform: translateX(110%);
            font-size: 20px;
            transition-delay: 0.7s;
            margin: 0 5px;
            font-weight: 500;

        }
        a{
            transform: translateY(170%);
            width: fit-content;
            font-size: 20px;
            transition-delay: 1s;
            background-color: var(--orange);
            border-radius: 5px;
            padding: 3px 10px;
            align-self: center;
            font-weight: 800;
            box-shadow: 0px 0px 3px black;
            &:hover{
                box-shadow: 0px 0px 5px black;
            }
        }
        
    }
    &:hover{
        background-position: 220%;
        .overlay{
            height: 100%;
            h3,p{
                opacity: 1;
                transform: translateX(0%);
            }
            a{
                opacity: 1;
                transform: translateY(0%);
                &:hover{
                    color:var(--purple);
                }
            }
            .title-line-card{
                transform: translateX(0%);
            }
        }
    }
    
`;

function SmallCard({data}) {
    const checkImageExistence = () => {
        const imageUrl = directoryImages[data.image];
        const image = new Image();
        image.src = imageUrl;
        image.onload = () => {
            console.log("existe")
        };
        image.onerror = () => {
            console.log("no existe")
        };
    };

    // Llamamos a la función para verificar la existencia de la imagen
    checkImageExistence();
    return (
        <CardContainer className='small-card' bgImage={directoryImages[data.image]}>
            <div className="overlay">
                <div className="title-card">
                    <h3>{data.title}</h3>
                    <div className='title-line-card'></div>
                </div>
                
                <p>{data.content}</p>
                <Link to={data.to}>Ver mas</Link>
            </div>
        </CardContainer>
    )
}

export default SmallCard