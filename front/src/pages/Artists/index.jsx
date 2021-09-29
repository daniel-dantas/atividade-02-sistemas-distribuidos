import React from 'react';
import { ActorContainer, ListActor, BodyPesq, Header, PesqContainer } from './styles';

import Actor from '../../components/ActorArtists';


const Artists = ()=>{

    return(
        <PesqContainer>

            <Header>
                <h2>Spotify API - integration - SD </h2>
            </Header>
            <BodyPesq>
                <ActorContainer>
                    <h2>Asrtistas referentes à pesquisa</h2>
                </ActorContainer>

                <ListActor>
                    <Actor />
                    <Actor />
                    <Actor />
                    <Actor />
                    <Actor />
                    <Actor />
                </ListActor>
            </BodyPesq>

            
        </PesqContainer>
    )
}

export default Artists;