import { Link, Outlet, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { getLocal, setLocal } from '../../services/localStorage';

import {
  Container,
  LogoContainer,
  RightContainer,
  SearchContainer,
  SearchBar,
  LogoImage,
  LoginContainer,
  LogoutContainer
} from "./style";
import { FooterContainer } from "../Footer/style";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../../common/darkmode/theme";
import { GlobalStyle } from "../../common/GlobalStyles.js/GlobalStyles";
import { useProducts } from "../../hooks/useProducts";


export function Header() {
  const location = useLocation();
  const [user, setUser] = useState('');
  const [theme, setTheme] = useState("light")
  const {products, setFilteredProducts} = useProducts()
  const themeToggler = () => {
    theme === "light" ? setTheme('dark') : setTheme('light');
  }

  useEffect(() => {
    setUser(getLocal('user'));
  }, []);

  function logout() {
    setLocal('user', '');
    setUser(getLocal('user'));
    window.location.href = '/';
  }

  return (
    <>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <Container>
          <GlobalStyle />

          <LogoContainer>
            <Link to={"/"}>
              <LogoImage src="https://dynamic.brandcrowd.com/asset/logo/cd55ba0f-0e00-4545-af06-dd9978af2b73/logo-search-grid-1x?logoTemplateVersion=1&v=637323645987430000&text=SerraGeek" alt="Logo" />
            </Link>
          </LogoContainer>

          <SearchContainer
            style={{
              display:
                location.pathname === "/Login" ||
                  location.pathname === "/Contact"

                  ? "none"
                  : "flex",
            }}
            onChange={(e) => setFilteredProducts(products.filter(product => product.nome.toLowerCase().includes(e.target.value.toLowerCase())))}
          >
            <SearchBar placeholder="O que você procura?" />
          </SearchContainer>

          <RightContainer>

            <LoginContainer style={{
              display:
                location.pathname === "/Login" ||
                  location.pathname === "/Contact"

                  ? "none"
                  : "flex",
            }}>

              <Link to={"/Cart"}>
                <span>Carrinho</span>
              </Link>
            </LoginContainer>

            <LoginContainer>
              <Link to={"/Contact"}>
                <span>Fale com a gente</span>
              </Link>
            </LoginContainer>

            {user === '' ?
              <LoginContainer style={{
                display:
                  location.pathname === "/Login"


                    ? "none"
                    : "flex",
              }}>
                <Link to={"/Login"}>
                  <span>Fazer Login</span>
                </Link>
              </LoginContainer> :
              <LogoutContainer>
                <Link id="linkHeader" to={"/"}>
                  <span>Bem-vindo, {getLocal('user')}</span>
                  <span id="logout" onClick={() => logout()}>Logout</span>
                </Link>
              </LogoutContainer>
            }

          </RightContainer>
          <button className="button1" onClick={() => themeToggler()}>Mudar tema</button>

        </Container>
      </ThemeProvider>
      <Outlet />

      <FooterContainer />

    </>
  );
}