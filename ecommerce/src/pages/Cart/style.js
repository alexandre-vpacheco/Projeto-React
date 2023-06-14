import styled from 'styled-components';

export const ContainerCart = styled.div`
    min-height: 100vh;
    display: grid;
    grid-template-columns: auto auto auto auto;
    color: #000;
    width: 80%;
    gap: 5vw;
    margin: 0 auto;
    padding: 50px 0;
`;

export const CartProduct = styled.div`
    display: flex;
    align-items: center;
    width: 300px;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;
    border-radius: 5px;
    box-shadow: 1px 1px 5px #000;
    padding: 10px;

    img {
        width: 80%;
    }

    h1, span {
        margin: none;
        text-align: center;
    }
`;