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

  background-color: rgb(221, 41, 11);
  padding: 0px;
  height: 75px;
  animation: ${fadeIn} 0.5s ease-in;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  overflow: hidden;

  @media screen and (max-width: 1015px) {
   flex-direction: column;
   height: auto;
   align-items: center;

   button{
    margin: 5px 0;
   }
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
  img {
    height: 75px;

    box-shadow: none;
  }
  img:hover{
    box-shadow: none;
  }
  
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

export const RightContainer = styled.div`
  /* Estilos para o container direito */

  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 80px;

  @media only screen and (max-width: 1015px) {
    border-top: 1px solid #fff;
    width: 90%;
    padding: 5px 0;
    justify-content: space-around;
  }
`;

export const LoginContainer = styled.div`
  span{
    color: white;
    font-weight: bold;
    transition: .3s;
    padding: 6px;
    border:2px solid transparent;
    border-radius: 10px;
  }
  
  span:hover{
    background-color: white;
    color: rgb(221, 41, 11);
    border-color: white;
  }
`;

export const LogoutContainer = styled.div`
  #linkHeader {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;
  }

  #logout{
    font-size: 13px;
    cursor: pointer;
    background: #fff;
    color: rgb(221, 41, 11);
    border-radius: 10px;
    padding: 5px;
    font-weight: bolder;
    transition: .3s;
  }

  #logout:hover {
    background: rgb(221, 41, 11);
    color: #fff;
  }
  
  @media only screen and (max-width: 1015px) {
    #linkHeader {
      flex-direction: row;
      gap: 10px;
    }
  }
`;

export const SearchContainer = styled.div`
  /* Estilos para o container de busca */
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${fadeIn} 0.5s ease-in;
`;

export const SearchBar = styled.input`
  /* Estilos para a barra de busca */
  padding: 8px;
  width: 550px;
  border: none;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.3s ease-in-out;
  margin-right: 100px;
  color: #000;
  background-color: #fff;
  font-weight: bold;



  &:focus {
    outline: none;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  }

  @media only screen and (max-width: 1015px) {
    width: 100%;
    margin: 0;
    display: none;
  }
`;

export const LogoImage = styled.img`
  /* Estilos para a imagem do logo */
 // margin-top: 7%;
  //margin-left: -13%;
  width: 230px;
  height: 70px;
  align-items: start;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.3s ease-in-out;
  
  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }

  @media only screen and (max-width: 1015px) {
    width: 150px;
    height: 75px;
  }
`;
export const Button1 = styled.button`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: #fff;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  padding: 0;
`;
 