import React, { useEffect } from 'react';
import SmallCard from './SmallCard';
import data from '../data/sectionsData.json';
import styled from 'styled-components';

const CardsContainer = styled.div`
  margin: 100px 0;
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  & > div{
    opacity: 0;
    transform: translatex(-20%);
    transition: all 1s ease;
  }
  .isvisible{
    opacity: 1;
    transform: translateY(0%);
  }
`;
const HeaderCards = styled.div`
  width: 100%;
  height: 40px;
  font-size: 40px;
  h2{
    margin-left: 40px;
    text-align: center;
  }
`;

function CardsSection() {
  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        const targetElement = entry.target;
        if (entry.isIntersecting) {
          targetElement.classList.add('isvisible');
        } else {
          targetElement.classList.remove('isvisible');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      threshold: 0.7,
    });

    document.querySelectorAll('.small-card').forEach((element) => {
      observer.observe(element);
    });


    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <HeaderCards>
        <h2>Mis servicios</h2>
      </HeaderCards>
      <CardsContainer>
        {data.map((item, index) => (
          <SmallCard key={index} data={item} className="small-card" />
        ))}
    </CardsContainer>
    </>
  );
}

export default CardsSection;
