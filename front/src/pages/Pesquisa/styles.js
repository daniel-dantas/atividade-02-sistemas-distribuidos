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

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const FormPesq = styled.form`
    height: 400px;
    width: 30%;

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    div{
        margin-top: 10%;
    }
`;

export const Title = styled.h2`
    color: #4d4d4d;
`

export const Input = styled.input`
    height: 30px;
    width: 300px;

    padding-left: 2%;

    border: none;
    border: 1px solid #ddd;
    border-radius: 4px;

    margin-top: 3%;

    font-weight: 500;
    text-align: center;

    :focus{
        border: 1px solid #1DB954;
    }
`;

export const Button = styled.button`
    height: 35px;
    width: 40%;
 
    background-color: #1DB954;

    border-radius: 4px;

    font-weight: 900;
    color: #fff;

    border: none;
    outline: 0;

    margin-top: 3%;

    cursor: pointer;
`;