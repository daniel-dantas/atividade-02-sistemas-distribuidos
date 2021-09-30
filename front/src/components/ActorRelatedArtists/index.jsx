import React from 'react';
import { ActorContainer, InfoContainer } from './styles';

const Actor = ({ name }) => {
    return (
        <ActorContainer>
            <InfoContainer>
                <h4>{name}</h4>
            </InfoContainer>
        </ActorContainer>
    )
}

export default Actor;