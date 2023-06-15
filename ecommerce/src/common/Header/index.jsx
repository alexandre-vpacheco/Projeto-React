import { Link, Outlet, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { getLocal, setLocal } from '../../services/localStorage';
import { FiSun, FiMoon } from 'react-icons/fi';
import { Button1 } from "./style";

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
import { FaShoppingCart } from 'react-icons/fa';


export function Header() {
  const location = useLocation();
  const [user, setUser] = useState('');
  const [theme, setTheme] = useState("light")
  const { products, setFilteredProducts } = useProducts()
  const themeToggler = () => {
    theme === "light" ? setTheme('dark') : setTheme('light');
  }

  useEffect(() => {
    setUser(getLocal('user'));
  }, []);

  function logout() {
    setLocal('user', '');
    setUser(getLocal('user'));
    setLocal('cartList', [])
    setLocal('idClient', '');
    window.location.href = '/';
  }

  return (
    <>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <Container>
          <GlobalStyle />

          <LogoContainer>
            <Link to={"/"}>
              <LogoImage src="https://raw.githubusercontent.com/alexandre-vpacheco/Projeto-React/5a61a90c2189fdd3077f3da4a9382e17d4f73930/ecommerce/src/assets/logo-serrageek-hd-removebg.png" alt="Logo" />
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
  <span>
    <FaShoppingCart /> Carrinho
  </span>
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
          <Button1 onClick={() => themeToggler()}>
            {theme === 'light' ? <FiMoon /> : <FiSun />}
          </Button1>

        </Container>
      </ThemeProvider>
      <Outlet />

      <FooterContainer />

    </>
  );
}