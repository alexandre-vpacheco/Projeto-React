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
  background-color: gray;
  min-height: 100vh;
  background: url('https://marketplace.canva.com/EAFHm4JWsu8/1/0/1600w/canva-pink-landscape-desktop-wallpaper-HGxdJA_xIx0.jpg');
  background-repeat: no-repeat;
  background-size: cover; 
  background-attachment: fixed;
`;

export const NavBarContainer = styled.div`
  display: inline-flex;
  position: relative;
  overflow: hidden;
  max-width: 100%;

  background-color: #343434;
  padding: 0 20px;
  height: 30px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;

  box-shadow: 0 10px 40px rgba(159, 162, 177, 0.9);
`;

export const NavBar = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
  gap: 40px;
  margin: 0;
  width: 100%;
  height: 100%;
  padding: 0 0 0 70px;
  animation: ${slideInFromLeft} 0.5s ease-in;

  @media screen and (max-width: 768px) {
    padding: 0;
  }

  a {
    height: 100%;
  }
`;

export const NavItem = styled.li`

  

  padding: 20px;
  text-decoration: none;
  transition: 0.3s;
  margin: 0 6px;
  z-index: 1;
  font-family: "DM Sans", sans-serif;
  font-weight: 500;
  position: relative;


  a{
    color: ${(props) => {
    let color = '';
    props.isActive ? color = props.color: color='#83818c'
    return color;
    }};
  }


  @media screen and (max-width: 768px) {
    font-size: 16px;
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
  grid-template-columns: auto auto auto;
  width: 80%;
  margin: 50px auto;
  gap: 50px;
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
  background-color: #ffffff05;
  backdrop-filter: blur(51px);
  -webkit-backdrop-filter: blur(25px);
  animation: cards .3s linear;

  &:hover {
    box-shadow: 1px 1px 10px #fff;
  }

  img {
    width: 200px;
  }


  h1 {
    font-size: 20px;
    margin: 0;
    width: 200px;
    text-shadow: 2px 2px #000;
  }

  span {
    text-shadow: 2px 2px #000;
  }

  @keyframes cards {
    0% {opacity: 0;}
    100% {opacity: 1;}
  }
`;