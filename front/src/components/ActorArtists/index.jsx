import React from 'react';
import { useHistory } from 'react-router';
import { ActorContainer, ButtonsContainer, InfoContainer, MainButton } from './styles';

const Actor = ({ name, id }) => {
    const history = useHistory();

    return (
        <ActorContainer>
            <InfoContainer>
                <h4>{name}</h4>
            </InfoContainer>

            <ButtonsContainer onClick={() => history.push(`/artistasrelacionados/${id}`)}>
                <MainButton>Buscar artistas relacionados</MainButton>
            </ButtonsContainer>
        </ActorContainer>
    )
}

export default Actor;