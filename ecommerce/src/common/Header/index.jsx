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
  ContactContainer,
  CartContainer,
  LoginContainer,
} from "./style";


export function Header() {
  const location = useLocation();

  return (
    <>
      <Container>

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
          <SearchBar placeholder="O que você procura?" />
        </SearchContainer>

        <LogoContainer>
          <Link to={"/"}>
            <LogoImage src="https://dynamic.brandcrowd.com/asset/logo/cd55ba0f-0e00-4545-af06-dd9978af2b73/logo-search-grid-1x?logoTemplateVersion=1&v=637323645987430000&text=SerraGeek" alt="Logo" />
          </Link>
        </LogoContainer>

        <CartContainer>
          <Link to={"/Cart"}>
            <button>Carrinho</button>
          </Link>
        </CartContainer>

        <LoginContainer>
          <Link to={"/Login"}>
            Fazer Login
          </Link>
        </LoginContainer>

        <RightContainer>
          <ContactContainer>
            <Link to={"/Contact"}>Fale com a gente</Link>
          </ContactContainer>
        </RightContainer>
      </Container>
      <Outlet />
    </>
  );
}