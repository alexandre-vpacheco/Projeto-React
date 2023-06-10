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
  background-color: #222;
  height: 100%;
`;

export const TitleContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  img {
    padding: 10px;
  }
  background-color: #444;
  width: 100%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 20px;
    text-align: center;
  }
`;

export const NavBarContainer = styled.div`
  margin: 0;
  width: 100%;
  height: 80px;
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
  box-sizing: border-box;
  display: flex;
  align-items: center;
  font-size: 20px;
  height: 100%;
  padding: 0 2px;
  border-bottom: ${(props) =>
    props.isActive ? "4px solid rgba(203, 18, 28, 0.8)" : "none"};
  color: ${(props) => (props.isActive ? " rgba(203, 18, 28, 0.8)" : "#737070")};
  transition: color 0.3s ease-in-out;

  &:hover {
    color: rgba(203, 18, 28, 0.8);
  }

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;
