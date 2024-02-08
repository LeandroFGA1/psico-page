import React from 'react'
import styled from 'styled-components'

const MenuBtnWrapper = styled.div`
    cursor: pointer;
    .line {
    transition: stroke-dasharray 400ms ease-in-out,
        stroke-dashoffset 600ms ease-in-out;
    }
    .line1 {
    stroke-dasharray: 56.5, 200;
    }
    .line2 {
    stroke-dasharray: 56.5, 200;
    }
    .line3 {
    stroke-dasharray: 56.5, 200;
    }
    

`;

const ToggleMenu = () => {
    return (
            <MenuBtnWrapper>
            <svg width="60" height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class='line line2' d="M20 50L81 50" stroke="black" stroke-width="7" stroke-linejoin="round" />
                <path class='line line3' d="M20 72.6271H22.0935M22.0935 72.6271H76C76 72.6271 86.0698 75.1272 91 48.6272C99 5.62717 76 27.6271 76 27.6271L22.0935 72.6271Z" stroke="black" stroke-width="7" stroke-linejoin="round" />
                <path class="line line1" d="M20 28H22.0935M22.0935 28H76C76 28 86.0698 25.5 91 52C99 95 76 73 76 73L22.0935 28Z" stroke="black" stroke-width="7" stroke-linejoin="round" />
            </svg>
        </MenuBtnWrapper>
    )
}

export default ToggleMenu