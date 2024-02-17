import React from 'react'
import styled from "styled-components"
import data from "../data/therapyData.json"
const TherapyContainer = styled.div`
    width: 100%;
    height: fit-content;
    min-height: 100vh;
    padding-bottom: 50px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    align-items: center;
    justify-content: center;
`;
const TherapyItem = styled.div`
    width: 90%;
    height: fit-content;
    background-color: red;
    h2{
        font-size: 40px;
        text-transform: capitalize;
        font-weight: 600;
        color:var(--purple);
        
    }
    p{
        margin-left: 50px;
        font-size: 30px;
        word-spacing: 1px;
        letter-spacing:0.3px;
    }
`;
function TherapySection() {
    return (
        <TherapyContainer>
        {data.slice(0,-1).map((item)=>(
            <TherapyItem>
            <h2>{item.title}</h2>
            <p>{item.expanded_content}</p>
            </TherapyItem>
        ))}
        </TherapyContainer>
    )
}

export default TherapySection