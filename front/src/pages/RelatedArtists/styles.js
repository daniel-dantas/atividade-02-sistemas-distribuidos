import styled from 'styled-components';

export const PesqContainer = styled.div`
    height: 100vh;
    width: 100%;
`;

export const Header = styled.header`
    height: 20vh;
    width: 100%;

    background-color: #1DB954;

    box-shadow: -1px 0px 10px -3px rgba(0,0,0,0.75);
    }
    h2{
        font-size: 3em;

        color: #fff;

        margin-left: 1%;
    }

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const BodyPesq = styled.div`
    height: 75vh;
    width: 100%;

    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ActorContainer = styled.div`
    width: 22.5%;

    border-bottom: 1px solid #4d4d4d;

    text-align: center;

    h2{
        color: #4d4d4d;

        margin-bottom: 1%;
    }
`;

export const ListActor = styled.div`
    height: 70%;
    width: 22.50%;

    margin-top: 1%;

    display: flex;
    flex-direction: column;
    align-items: center;

    overflow: auto;

    padding-right: 0.3%;

    ::-webkit-scrollbar {
        width: 10px;               /* width of the entire scrollbar */
    }

    ::-webkit-scrollbar-track{
        background: #fff;
    }

    ::-webkit-scrollbar-thumb {
        background-color: #4d4d4d;    /* color of the scroll thumb */
        border-radius: 20px;       /* roundness of the scroll thumb */
    }
`;
