import styled from 'styled-components';

export const Titulo = styled.h1`
    color: #000;
    text-align: center;
`;

export const Container = styled.div`
    min-height: 100vh;
    color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column-reverse;

    .pedido {
        display: flex;
        flex-direction: column;
        border: 2px solid #000;
        border-radius: 5px;
        width: 80%;
        margin: 10px auto;
        padding: 10px;
    }

    .itensPedido {
        display: flex;
        flex-direction: column;
        border-top: 1px solid  #000;
        border-bottom: 1px solid  #000;
        margin: 2px 0;
        padding: 5px 0;
    }
`;