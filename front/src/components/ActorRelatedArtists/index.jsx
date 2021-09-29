import React, { useState } from 'react';
import { ActorContainer, InfoContainer } from './styles';

const Actor = ()=>{
    const [artist, setartist] = useState({
        name: "Artista / banda",
    });

    return(
        <ActorContainer>
            <InfoContainer>
                <h4>{artist.name}</h4>
            </InfoContainer>
        </ActorContainer>
    )
}

export default Actor;