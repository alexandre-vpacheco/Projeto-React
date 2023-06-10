import { Link, useLocation } from "react-router-dom";
import { Container, TitleContainer, NavBarContainer, NavBar, NavItem } from "./style";
import { useEffect } from "react";

export function Home() {
  const location = useLocation();
  
  useEffect(() => {
    // Initialização api
  }, []);

  return (
    <>
      <Container>
        <TitleContainer>Home</TitleContainer>
        <NavBarContainer>
          <NavBar>
            <NavItem isActive={location.pathname === "/"}>
              <Link to={"/"}>Home</Link>
            </NavItem>
            <NavItem isActive={location.pathname === "/animes"}>
              <Link to={"/animes"}>Animes</Link>
            </NavItem>
            <NavItem isActive={location.pathname === "/jogos"}>
              <Link to={"/jogos"}>Jogos</Link>
            </NavItem>
            <NavItem isActive={location.pathname === "/filmes"}>
              <Link to={"/filmes"}>Filmes</Link>
            </NavItem>
            <NavItem isActive={location.pathname === "/outro"}>
              <Link to={"/outro"}>Outro</Link>
            </NavItem>
          </NavBar>
        </NavBarContainer>
      </Container>
    </>
  );
}
