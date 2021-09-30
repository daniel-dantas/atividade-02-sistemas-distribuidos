import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';

import { ActorContainer, ListActor, BodyPesq, Header, PesqContainer } from './styles';

import Actor from '../../components/ActorRelatedArtists';


const Artists = () => {
    let { id } = useParams();

    const [artists, setArtists] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8000/api/v1/recomendacao/${id}`)
            .then(({ data }) => {
                const dataWithoutDuplicates = [];
                data.forEach((artist) => {
                    if (dataWithoutDuplicates.findIndex((aux) => aux.id === artist.id) < 0) {
                        dataWithoutDuplicates.push({
                            name: artist.name,
                            id: artist.id
                        });
                    }
                })

                setArtists(dataWithoutDuplicates);
            })
    }, [setArtists]);

    return (
        <PesqContainer>

            <Header>
                <h2>Spotify API - integration - SD </h2>
            </Header>
            <BodyPesq>
                <ActorContainer>
                    <h2>Asrtistas relacionados</h2>
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