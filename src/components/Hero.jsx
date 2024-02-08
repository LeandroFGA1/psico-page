import React from 'react'
import styled from 'styled-components'

const HeroContainer = styled.section`
    width: 100%;
    height: calc(-60px + 100vh);
    background-color: #8ab3d6;
    margin-bottom: 60px;
    .content {
      width: 100%;
      height: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      margin-top: -100px;
}

  .hero {
    position: relative;
    background: #333333;
    color: white;
    height: 100vh;
    display: flex;
    align-items: center;
    overflow: hidden;
    text-align: center;
  }

  .hero h2 {
    position: relative;
    z-index: 1;
    font-size: 4.5rem;
    margin: 0 0 10px;
    line-height: 1;
    color: rgba(255, 255, 255, 0.9);
  }

  .hero p {
    position: relative;
    z-index: 1;
    font-size: 1.1rem;
    color: rgba(255, 255, 255, 0.5);
    line-height: 1.4;
    max-width: 400px;
    text-align: center;
  }

  /* ========================= */

  .waves {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100vh;
    background-color: var(--purple);
    box-shadow: inset 0 0 50px rgba(0, 0, 0, 0.5);
    transition: 500ms;
  }

  .waves::before,
  .waves::after {
    content: '';
    position: absolute;
    width: 600vw;
    height: 550vw;
    top: -65vw;
    left: 50%;
    transform: translate(-50%, -75%);
  }

  .waves::before {
    border-radius: 44%;
    background: var(--opaque-purple);
    animation: waves 30s linear infinite;
  }

  .waves::after {
    border-radius: 44%;
    background: var(--light-purple);
    animation: waves 35s linear infinite;
  }

  @keyframes waves {
    0% {
      transform: translate(-50%, -75%) rotate(0deg);
    }
    
    100% {
      transform: translate(-50%, -75%) rotate(360deg);
    }
  }
  @media (min-width: 400px){
    .waves::before,.waves::after{
      width: 450vw;
      height: 400vw;
    }
  }
  @media (min-width: 640px) {
    /* Media query para 640px */
    .waves::before,.waves::after{
      width: 350vw;
      height: 300vw;
    }
  }

  @media (min-width: 768px) {
      /* Media query para 768px */
      .waves::before,.waves::after {
        
      }
  }

  @media (min-width: 1024px) {
      /* Media query para 1024px */
  }

  @media (min-width: 1280px) {
      /* Media query para 1280px */
  }

  @media (min-width: 1536px) {
      /* Media query para 1536px */
  }

`;

function Hero() {
  return (
    <HeroContainer id='hero'>
      <section className='hero'>
        <div className="content">
          <h2>Psicologa juanita pereira</h2>
          <p>Aliquam erat ac ipsum. Integer aliquam purus. Quisque lorem tortor fringilla sed, vestibulum id, eleifend justo vel bibendum sapien massa ac turpis faucibus orci luctus non</p>
        </div>
        <div className="waves"></div>
      </section>
    </HeroContainer>
  )
}

export default Hero