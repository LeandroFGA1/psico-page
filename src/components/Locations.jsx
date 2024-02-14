import React,{useState} from 'react'
import styled from "styled-components"
import locations from "../data/LocationsAreaData.json"
import directory from "../assets/images/directoryImages"

const LocationsContainer = styled.div`
    width: 100%;
    height: fit-content;
    padding-bottom: 100px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 40px;
    font-size: 36px;
    text-transform: capitalize;
`;

const LocationItem = styled.div`
    min-width: 240px;
    width: 90%;
    height: fit-content;
    
    padding-bottom: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    h2{
        font-size: 30px;
        text-transform: capitalize;
        font-weight: 600;
    }
    .location-content{
        
        width: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
        text-align: center;
        box-shadow: 0px 1px 10px black;
        border-radius: 10px;
        padding-bottom: 50px;
        h3{
            font-size: 30px;
            font-weight: 500;
        }
        iframe{
        width: 95%;
        height: 55vh;
        border: 3px solid var(--opaque-purple);
        border-radius: 5px; 
        height: 1px;
        transition: all 0.7s ease-in-out;
        }
        span{
            font-size: 20px;
            display: flex;
            align-items: center;
            img{
                width: 25px;
                height: 25px;
                filter: grayscale(100%);
            }
            
        }
        &:hover > span >img{
            filter: grayscale(0%);
        }
    
    }
    
    input{
        display: none;
    }
    label{
        font-size: 20px;
        background-color: var(--orange);
        padding: 5px;
        border-radius: 10px;
        margin-bottom: 20px;
        font-weight: 500;
        cursor: pointer;
        &:hover{
                color: var(--purple)
            }
    }
    input:checked ~ iframe{
        height: 80vh;
    }
`;
const ImagesContainer = styled.div`
    width: 95%;
    min-width: 290px;
    height: fit-content;
    padding: 20px 0;
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    
    .size-big-img{
        width: 100%;
        top: 60px;
        height:  calc(-60px + 100%);
        position: fixed;
        z-index: 2;
        backdrop-filter: blur(8px);
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: none;
        min-width: none;
        img{
            object-fit: contain;
        }
        &:hover{
            img{
                transform: none;
                transition: none;
            }
        }
    }
`;
const ImageSizeBox = styled.div`
        width: 48%;
        min-width: 300px;
        height: 35%;
        aspect-ratio: 16/9;
        cursor: pointer;
        overflow: hidden;
        
        &:hover{
            img{
                transform: scale(110%);
            }
        }
    img{
        transition: all 0.3s ease-in-out;
        width: 100%;
        height: 100%;
        
        
    }
`;

function Locations() {
    const [textSpan, setTextSpan] = useState("Ver mapa")

    const handlerSizeImage = (event)=>{
        const image = event.currentTarget;
        if ( image.classList.contains("size-big-img")){
            image.classList.remove("size-big-img")
        }else{
            image.classList.add("size-big-img")
        }
        
    }
    const handlerSpan = ()=>{
        setTimeout(() => {
            if (textSpan === "Ver mapa") {
                setTextSpan("Contraer");
            } else {
                setTextSpan("Ver mapa");
            }
        }, 800);
    }
  return (
    <LocationsContainer>
        <h2>Puedes encontrarme en</h2>
        {locations.map((item, index)=>(
            <LocationItem>
                <h3>Consultorio {item.locationArea}</h3>
                <div className='location-content'>
                    <h3>{item.locationName}</h3>
                    <span>
                        <img src={directory.local} alt="location pointer" />
                        {item.locationAdress}
                    </span>
                    <ImagesContainer>
                        {item.localImages.map((currentImage,index)=>(
                            <ImageSizeBox onClick={handlerSizeImage}>
                                <img 
                                    src={directory[currentImage] ? directory[currentImage]: directory.imageNotFound} 
                                    alt={`consultorio de ${item.locationArea}`}
                                    toolpip="ver imagen"
                                />
                            </ImageSizeBox>
                                
                            ))}
                    </ImagesContainer>
                    <input type="checkbox" name={`toggle-map-${index}`} id={`toggle-map-${index}`}/>
                    <label htmlFor={`toggle-map-${index}`} onClick={handlerSpan}>{textSpan}</label>
                    <iframe src={item.mapGoogle} frameborder="0"></iframe>
                </div>
            </LocationItem>
        ))}
        
    </LocationsContainer>
  )
}

export default Locations