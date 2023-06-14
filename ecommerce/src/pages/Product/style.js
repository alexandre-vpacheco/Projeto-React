import styled from 'styled-components';

export const ContainerProduct = styled.div`
    min-height: 100vh;
    display: flex;
    color: #000;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
    padding: 50px 0%;
    gap: 20px;

    @media screen and (max-width: 1170px) {
        flex-direction: column;
    }
`;

export const ContainerImage = styled.div`
    img {
        width: 30vw;
        border: 5px solid black;
        border-radius: 20px;
        box-shadow: 5px 5px 20px 5px;
    }
    @media screen and (max-width: 1170px) {
      img { 
        width: 80vw;
      }
    }
`;

export const ContainerDescricao = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 35vw;
    text-align: center;
    border: 2px outset black;
    box-shadow: 20px 20px 25px;
    background-color: white;
    border-radius: 10px;
    h1 {
        font-size: 3vw;
    }
    p {
        font-size: 20px;
    } 
    @media screen and (max-width: 1170px) {
        width: 80vw;
        h1 {
        font-size: 20px;
    }
    p {
        font-size: 15px;
    } 
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
    background-color: white;

    #containerButton {
        display: flex;
        justify-content: space-between;
        width: 60%;
        align-items: center;
        font-weight: bold;
    }
`;
