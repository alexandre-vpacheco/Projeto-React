import { Link, Outlet, useLocation } from "react-router-dom";

import {
    Container,
    LeftContainer,
    LogoContainer,
    ProfileContainer,
    RightContainer,
    SearchContainer,
    SearchBar,
    LogoImage,
  } from "./style";


export function Header() {
  const location = useLocation();

  return (
    <>
      <Container>
        <LeftContainer>
          <LogoContainer>
            <Link to={"/"}>
              <LogoImage src="https://source.unsplash.com/720x400?onepiece" alt="Logo" />
            </Link>
          </LogoContainer>
        </LeftContainer>

        <SearchContainer
          style={{
            display:
              location.pathname === "/" ||
              location.pathname === "/animes" ||
              location.pathname === "/jogos" ||
              location.pathname === "/filmes" ||
              location.pathname === "/outros" 
                ? "flex"
                : "none",
          }}
        >
          <SearchBar placeholder="O que você procura?"  />
        </SearchContainer>
        <RightContainer>
          <ProfileContainer>
            <span>
              Welcome, <span>Yan</span>
            </span>
          </ProfileContainer>
        </RightContainer>
      </Container>
      <Outlet />
    </>
  );
        }