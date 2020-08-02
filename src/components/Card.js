import React, { useState } from 'react'
import { animated } from 'react-spring'
import styled from 'styled-components'

const Card = ({ name, img_src, animation }) => {
    const [ isFlipped, setFlipped ] = useState(false)
    // need to be able to disable flipping as well!!!
    const toggleFlipped = () => setFlipped(!isFlipped)

    return (
        <CardBase isFlipped={isFlipped} onClick={toggleFlipped} style={animation}>
            <div>
                <CardFace>
                    <img 
                        src={img_src}
                        alt={name}
                    />
                </CardFace>
                <CardFace isBackface={true}>
                    <img
                        src="https://cdn.shopify.com/s/files/1/0045/5865/1465/products/Universal_Waite_Tarot_Deck_in_a_Tin_Card_Back_550x.jpg?v=1560306636"
                        alt="celestial patterned card backface"
                    />
                </CardFace>
            </div>
        </CardBase>
    )
}

const CardBase = styled(animated.div)`
    cursor: pointer;
    height: 35rem;
    perspective: 1000px;
    position: absolute;
    width: 22.5rem;

    & > div {
        position: relative;
        transition: transform 0.8s;
        transform: ${props => props.isFlipped ? "" : "rotateY(180deg)"};
        transform-style: preserve-3d;
    }
`

const CardFace = styled.div`
    align-items: center;
    backface-visibility: hidden;
    background-color: #ffffff;
    border-radius: 1rem;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
    display: flex;
    height: 35rem;
    justify-content: center;
    -webkit-backface-visibility: hidden;
    position: absolute;
    transform: ${props => props.isBackface ? "rotateY(180deg)" : "rotateY(0deg)"};
    width: 22.5rem;

    img {
        height: 31.8rem;
        width: 18.5rem;
        object-fit: cover;
    }
`

export default Card