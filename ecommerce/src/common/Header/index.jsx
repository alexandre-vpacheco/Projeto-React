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
              <LogoImage src="/path/to/logo.png" alt="Logo" />
            </Link>
          </LogoContainer>
        </LeftContainer>

        <SearchContainer
          style={{
            display:
              location.pathname === "/" ||
              location.pathname === "/anime" ||
              location.pathname === "/jogos" ||
              location.pathname === "/filme" ||
              location.pathname === "/outros" 
                ? "flex"
                : "none",
          }}
        >
          <SearchBar placeholder="Search..." />
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