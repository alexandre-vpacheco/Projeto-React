import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const Container = styled.div`
  /* Estilos para o container principal */
  background-color: #111;
  padding: 20px;
  animation: ${fadeIn} 0.5s ease-in;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const LeftContainer = styled.div`
  /* Estilos para o container esquerdo */
  display: flex;
  align-items: center;
`;

export const LogoContainer = styled.div`
  /* Estilos para o container do logo */
  margin-right: 10px;
`;

export const ProfileContainer = styled.div`
  /* Estilos para o container do perfil */
  background-color: #333;
  padding: 10px;
  border-radius: 5px;

  span {
    font-weight: bold;
  }

  span:first-child {
    color: #DCDCDC;
  }

  span:last-child {
    color: #ff0000;
  }
`;

export const ContactContainer = styled.div`
background-color: 	#FFFFFF;
padding: 3px;
`;

export const CartContainer = styled.div`

`;

export const LoginContainer = styled.div`
background-color: 	#FFFFFF;
padding: 3px;
`;

export const RightContainer = styled.div`
  /* Estilos para o container direito */
  display: flex;
  align-items: center;
`;

export const SearchContainer = styled.div`
  /* Estilos para o container de busca */
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  animation: ${fadeIn} 0.5s ease-in;
`;

export const SearchBar = styled.input`
  /* Estilos para a barra de busca */
  padding: 8px;
  width: 300px;
  border: none;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.3s ease-in-out;
  margin-right: 100px;

  &:focus {
    outline: none;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const LogoImage = styled.img`
  /* Estilos para a imagem do logo */
  width: 200px;
  height: 100px;
  border-radius: 30%;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }

  @media (max-width: 768px) {
    width: 150px;
    height: 75px;
  }
`;
