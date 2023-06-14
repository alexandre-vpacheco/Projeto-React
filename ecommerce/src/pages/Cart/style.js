import styled from 'styled-components';

export const Container = styled.div`
    min-height: 100vh;
    color: #000;
    text-align: center;

    h2{
        font-size: 25px;
    }
`;

export const ContainerTotal = styled.div`
    width: 80%;
    padding: 50px 0;
    margin: 0 auto;
    border-bottom: 1px solid #000;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    span {
        font-size: 18px;
        font-weight: bold;
    }

    h3{
        animation: loadingRequest .3s infinite alternate;
    }

    @keyframes loadingRequest {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const ContainerCart = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    color: #000;
    width: 80%;
    gap: 5vw;
    margin: 0 auto;
    padding: 50px 0;

    @media screen and (max-width: 800px) {
        grid-template-columns: auto;
    }
`;

export const CartProduct = styled.div`
    display: flex;
    align-items: center;
    width: 20vw;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;
    border-radius: 5px;
    box-shadow: 1px 1px 5px #000;
    padding: 10px;
    background: rgba(255, 255, 255, .5);

    img {
        width: 80%;
    }

    h3, span {
        margin: none;
        text-align: center;
    }

    @media screen and (max-width: 800px) {
        width: 70vw;
    }
`;