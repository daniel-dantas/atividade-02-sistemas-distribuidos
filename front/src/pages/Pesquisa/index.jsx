import React from 'react';
import { BodyPesq, Button, FormPesq, Header, Input, PesqContainer, Title } from './styles';

const Pesquisa = ()=>{
    return(
        <PesqContainer>

            <Header>
                <h2>Spotify API - integration - SD </h2>
            </Header>

            <BodyPesq>
                <FormPesq>
                    <Title>Pesquise por um artista / banda</Title>
                        <Input placeholder="Digite o nome do artista ou da banda"/>
                    <Button>Pesquisar</Button>
                </FormPesq>
            </BodyPesq>

        </PesqContainer>
    )
}

export default Pesquisa;