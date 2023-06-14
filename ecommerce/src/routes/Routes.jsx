import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Header } from "../common/Header";
import { Home } from "../pages/Home";
import { Contact } from "../pages/Contact";
import { Login } from "../pages/Login";
import { Cart } from "../pages/Cart";
import Product from "../pages/Product";
import SalesHistory from "../pages/SalesHistory";

export function AllRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={Header}>
          <Route Component={Home} path="/" />
          <Route Component={Home} path="/animes" />
          <Route Component={Home} path="/jogos" />
          <Route Component={Home} path="/filmes" />
          <Route Component={Home} path="/especiais" />
          <Route Component={Contact} path="/Contact" />
          <Route Component={Login} path="/Login" />
          <Route Component={Cart} path="/Cart" />
          <Route Component={Product} path="/Product" />
          <Route Component={SalesHistory} path="/sales-history" />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}