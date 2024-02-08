import React from 'react'
import styled from 'styled-components'
import directoryImages from "../assets/images/directoryImages"

const CardContainer = styled.div`
    position: relative;
    width: 300px;
    height: 200px;
    background-color: var(--opaque-purple);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    perspective: 1500px;
    box-shadow: 0 0 0 5px #ffffff80;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    transition: transform 2s ease-in-out;

    & > img {
        width: 148px;
        fill: #333;
        transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
    &:hover > img{
        transform: translateY(-100%);
    }
    &:hover > .card__content {
        opacity: 1;
        width: 100%;
        height: 100%;
        box-shadow: 0 8px 16px rgba(255, 255, 255, 0.2);
    }

    .card__content {
        position: absolute;
        top: 0;
        left: 0;
        width: 95%;
        height: 95%;
        opacity: 0;
        padding: 20px;
        box-sizing: border-box;
        background-color: var(--orange);
        transform: rotateX(-90deg);
        transform-origin: bottom;
        transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        user-select: none;
    }

    &:hover > .card__content {
        transform: rotateX(0deg);
    }

    .card__title {
        margin: 0;
        font-size: 24px;
        color: #333;
        font-weight: 700;
    }

    &:hover > svg {
        scale: 0;
    }

    .card__description {
        margin: 10px 0 0;
        font-size: 16px;
        color: black;
        line-height: 1.4;
        font-weight: 600;
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 255px;
        

        a{
            color: black;
            font-weight: 500;
            font-size: 20px;
            padding: 0 5px;
            text-align: center;
            background-color: var(--purple);
            border-radius: 5px;
            width:fit-content;
            font-weight: 700;
        }
        a:hover{
            
        }
    }


`;

function SmallCard({data}) {
    return (
        <CardContainer className='small-card'>
            <img src={directoryImages[data.image]} alt="" />
            <div class="card__content">
                <p class="card__title">{data.title}</p>
                <p class="card__description">
                    {data.content}
                    <a href="#"> ver mas</a>
                    </p>
            </div>
        </CardContainer>
    )
}

export default SmallCard