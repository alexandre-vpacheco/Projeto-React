import styled from 'styled-components';

export const ContainerProduct = styled.div`
    min-height: 100vh;
    display: flex;
    color: #000;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
    padding: 50px 0%;

    @media screen and (max-width: 800px) {
        flex-direction: column;
    }
`;

export const ContainerImage = styled.div`
    img {
        width: 30vw;
    }
`;

export const ContainerDescricao = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 35vw;
    text-align: center;

    h1 {
        font-size: 3vw;
    }
    p {
        font-size: 20px;
    }
`;

export const ContainerCart = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    width: 300px;
    border: 1px solid #000;
    border-radius: 5px;
    padding: 10px;

    #containerButton {
        display: flex;
        justify-content: space-between;
        width: 60%;
        align-items: center;
        font-weight: bold;
    }
`;
