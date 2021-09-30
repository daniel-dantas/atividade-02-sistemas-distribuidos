import React, { useState } from 'react';

import { BodyPesq, Button, FormPesq, Header, Input, PesqContainer, Title } from './styles';
import { useHistory } from 'react-router';

const Pesquisa = () => {
    const history = useHistory();

    const [name, setName] = useState('');

    return (
        <PesqContainer>

            <Header>
                <h2>Spotify API - integration - SD </h2>
            </Header>

            <BodyPesq>
                <FormPesq onSubmit={() => history.push(`/artistas/${name}`)}>
                    <Title>Pesquise por um artista / banda</Title>
                    <Input value={name} onChange={(event) => setName(event.target.value)} placeholder="Digite o nome do artista ou da banda" />
                    <Button>Pesquisar</Button>
                </FormPesq>
            </BodyPesq>

        </PesqContainer>
    )
}

export default Pesquisa;