import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';

import { ActorContainer, ListActor, BodyPesq, Header, PesqContainer } from './styles';

import Actor from '../../components/ActorArtists';


const Artists = () => {
    let { name } = useParams();

    const [artists, setArtists] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8000/api/v1/artista/${name}`)
            .then(({ data }) => {
                setArtists(data.map(({ name, id }) => {
                    return {
                        name,
                        id
                    }
                }))
            })
    }, [setArtists])

    return (
        <PesqContainer>

            <Header>
                <h2>Spotify API - integration - SD </h2>
            </Header>
            <BodyPesq>
                <ActorContainer>
                    <h2>Asrtistas referentes à pesquisa</h2>
                </ActorContainer>

                <ListActor>
                    {artists.map((artist) => (
                        <Actor
                            id={artist.id}
                            key={artist.id}
                            name={artist.name}
                        />
                    ))}
                </ListActor>
            </BodyPesq>


        </PesqContainer>
    )
}

export default Artists;