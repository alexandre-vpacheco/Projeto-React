import { Link, Outlet, useLocation } from "react-router-dom";

import {
  Container,
  LogoContainer,
  RightContainer,
  SearchContainer,
  SearchBar,
  LogoImage,
  ContactContainer,
  CartContainer,
  LoginContainer,
} from "./style";
import { FooterContainer } from "../Footer/style";


export function Header() {
  const location = useLocation();

  return (
    <>
      <Container>

        <SearchContainer
          style={{
            display:
              location.pathname === "/Login" ||
                location.pathname === "/Contact"

                ? "none"
                : "flex",
          }}
        >
          <SearchBar placeholder="O que você procura?" />
        </SearchContainer>

        <LogoContainer>
          <Link to={"/"}>
            <LogoImage src="https://dynamic.brandcrowd.com/asset/logo/cd55ba0f-0e00-4545-af06-dd9978af2b73/logo-search-grid-1x?logoTemplateVersion=1&v=637323645987430000&text=SerraGeek" alt="Logo" />
          </Link>
        </LogoContainer>

        <RightContainer>
        <CartContainer style={{
          display:
            location.pathname === "/Login" ||
              location.pathname === "/Contact"

              ? "none"
              : "flex",
        }}>

          <Link to={"/Cart"}>
            <a>Carrinho</a>
          </Link>
        </CartContainer>

        <LoginContainer style={{
          display:
              location.pathname === "/Contact"

              ? "none"
              : "flex",
        }}>
          <Link to={"/Login"}>
            <a>Fazer Login</a>
          </Link>
        </LoginContainer>

        
          <ContactContainer>
            <Link to={"/Contact"}>
              <a>Fale com a gente</a>
              </Link>
          </ContactContainer>
        </RightContainer>
      </Container>
      <Outlet />
      <FooterContainer />
    </>
  );
}