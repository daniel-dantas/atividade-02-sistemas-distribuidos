import styled from 'styled-components';

export const ActorContainer = styled.div`
    min-height: 120px;
    width: 80%;

    flex-direction: column;

    display: flex;
    align-items: center;
    justify-content: center;

    border-bottom: 1px solid #ddd;

    background-color: #fff;

    border-radius: 4px;

    -webkit-box-shadow: -1px 0px 10px -3px rgba(0,0,0,0.75);
    -moz-box-shadow: -1px 0px 10px -3px rgba(0,0,0,0.75);
    box-shadow: -1px 0px 10px -3px rgba(0,0,0,0.75);

    margin-top: 1%;
`;

export const InfoContainer = styled.div`
    height: 98%;
    width: 80%;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

`;

export const ButtonsContainer = styled.div`
    height: 90%;
    width: 80%;

    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
`;

export const MainButton = styled.button`
    height: 30px;
    width: 98%;

    background-color: #1DB954;

    border: none;
    outline: none;

    border-radius: 4px;

    color: #fff;
    
    font-weight: 700;

    cursor: pointer;

    :hover{
        filter: brightness(90%);
    }
`;
