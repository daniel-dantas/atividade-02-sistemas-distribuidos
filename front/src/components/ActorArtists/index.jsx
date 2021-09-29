import React, { useState } from 'react';
import { ActorContainer, ButtonsContainer, InfoContainer, MainButton } from './styles';

const Actor = ()=>{
    const [artist, setartist] = useState({
        name: "Artista / banda",
    });

    return(
        <ActorContainer>
            <InfoContainer>
                <h4>{artist.name}</h4>
            </InfoContainer>

            <ButtonsContainer>
                <MainButton>Buscar artistas relacionados</MainButton>
            </ButtonsContainer>
        </ActorContainer>
    )
}

export default Actor;