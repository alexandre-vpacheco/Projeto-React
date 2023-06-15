import styled, { keyframes } from "styled-components";

const slideInFromLeft = keyframes`
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const Container = styled.div`
  margin: 0;
  padding: 0px;
  box-sizing: border-box;

  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  width: 100%;
  
  min-height: 100vh;

`;

export const NavBarContainer = styled.div`
  align-items: center;
  display: inline-flex;
  position: relative;
  overflow: hidden;
  width: 100%;

  background-color: #343434;
  padding: 0 ;
  height: 30px;
 

  box-shadow: 0 10px 40px rgba(159, 162, 177, 0.9);

  @media screen and (max-width: 768px) {
    padding: 0;
  }
`;

export const NavBar = styled.ul`
  justify-content: center;
  list-style-type: none;
  display: flex;
  align-items: center;
  gap: 40px;
  margin: 0;
  width: 100%;
  height: 100%;
  padding: 0 0 0 0px;
  
  @media screen and (max-width: 768px) {
    padding: 0;
    gap: 10px;
  }

  a {
    height: 100%;
  }

  animation: ${slideInFromLeft} 0.5s ease-in;
`;

export const NavItem = styled.li`
  padding: 20px;
  text-decoration: none;
  transition: 0.3s;
  margin: 0 6px;
  z-index: 1;

  .link{
    color: ${(props) => {
    let color = '';
    props.isActive ? color = props.color: color='#83818c'
    return color;
    }};
    font-weight: bold;
    font-family: "DM Sans", sans-serif;
  }


  @media screen and (max-width: 768px) {
    padding: 0 5px;
    margin: 0;
    .link {
      font-size: 16px;
      margin: 0;
    }
  }

  &:before {
    content: "";
    position: absolute;
    bottom: -6px;
    left: 0;
    width: 100%;
    height: 5px;
    background-color: ${(props) => (props.isActive ? props.color : "#dfe2ea")};
    border-radius: 8px 8px 0 0;
    opacity: 0;
    transition: 0.3s;
  }

  &:hover:before {
    opacity: 1;
    bottom: 0;
  }

  &:hover {
    color: #333;
  }

  .nav-indicator {
    position: absolute;
    left: 0;
    bottom: 0;
    height: 4px;
    transition: 0.4s;
    height: 5px;
    z-index: 1;
    border-radius: 8px 8px 0 0;
    background-color: ${(props) => (props.isActive ? props.color : "#dfe2ea")};
    opacity: ${(props) => (props.isActive ? "1" : "0")};
  }
`;

export const NavIndicator = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  height: 4px;
  transition: 0.4s;
  height: 5px;
  z-index: 1;
  border-radius: 8px 8px 0 0;
`;

export const ContainerProducts = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  width: 80%;
  margin: 50px auto;
  gap: 50px;

  @media only screen and (max-width: 800px) {
    grid-template-columns: auto;
    width: 60%;
  }
`;


export const CardProduct = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 10px;
  padding: 10px 0;
  width: 100%;
  background: #fff;
  align-items: center;
  color: #fff;
  cursor: pointer;
  transition: .1s;
  text-align: center;
  background-color: white;
  //backdrop-filter: blur(25px);
  //-webkit-backdrop-filter: blur(15px);
  animation: cards .3s linear;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 0px 15px 10px rgba(255,18,18,0.4);
    
  }

  img {
    width: 15vw;
    mix-blend-mode: multiply;
  }

  h1 {
    font-size: 20px;
    margin: 0;
    width: 200px;
    color: black;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  span {
    color: black;
  }

  @keyframes cards {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @media only screen and (max-width: 800px) {
    img {
      width: 50vw;
    }
  }
`;
