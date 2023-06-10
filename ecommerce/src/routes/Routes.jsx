import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Header } from "../common/Header";
import { Home } from "../pages/Home"

export function AllRoutes() {
    return (
      <BrowserRouter>
        <Routes>
                      <Route Component={Header}>
              <Route Component={Home} path="/" />
              <Route Component={Home} path="/animes" />
              <Route Component={Home} path="/jogos" />
              <Route Component={Home} path="/filmes" />
              <Route Component={Home} path="/outros" />
                                      
            </Route>
                  </Routes>
      </BrowserRouter>
    );
  }