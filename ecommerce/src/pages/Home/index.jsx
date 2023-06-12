import { Link, useLocation } from "react-router-dom";
import { Container, NavBarContainer, NavBar, NavItem, NavIndicator } from "./style";
import { useEffect, useState } from "react";
import iconAction from "../../assets/action11.jpg" 

export function Home() {
  const location = useLocation();
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    // Inicialização da API
  }, []);

  useEffect(() => {
    // Atualizar o item selecionado com base na localização
    const pathToIndex = {
      "/": 1,
      "/animes": 2,
      "/jogos": 3,
      "/filmes": 4,
      "/outros": 5,
    };

    setSelectedItem(pathToIndex[location.pathname]);
  }, [location.pathname]);

  useEffect(() => {
    function fetchData() {
        setTimeout(() => {
            var pkmnFormatted = pokemonData.map(pokemon => {
                var str = "" + pokemon.id
                var pad = "000"
                var newId = pad.substring(0, pad.length - str.length) + str

                return {...pokemon, newId: newId}
            });

            setPokemons(pkmnFormatted)
        }, 2000)
    }

    fetchData();
}, [])

  return (
    <Container>

      <NavBarContainer>
        <NavBar>
          <NavItem
            isActive={selectedItem === 1}
            onClick={() => setSelectedItem(1)}
            color="#FF0000"
          >
            <Link to={"/"}>Home</Link>
            {selectedItem === 1 && <NavIndicator className="nav-indicator" />}
          </NavItem>
          <NavItem
            isActive={selectedItem === 2}
            onClick={() => setSelectedItem(2)}
            color="#00FFFF"
          >
            <Link to={"/animes"}>Animes</Link>
            {selectedItem === 2 && <NavIndicator className="nav-indicator" />}
          </NavItem>
          <NavItem
            isActive={selectedItem === 3}
            onClick={() => setSelectedItem(3)}
            color="#0000CD"
          >
            <Link to={"/jogos"}>Jogos</Link>
            {selectedItem === 3 && <NavIndicator className="nav-indicator" />}
          </NavItem>
          <NavItem
            isActive={selectedItem === 4}
            onClick={() => setSelectedItem(4)}
            color="#7CFC00"
          >
            <Link to={"/filmes"}>Filmes</Link>
            {selectedItem === 4 && <NavIndicator className="nav-indicator" />}
          </NavItem>
          <NavItem
            isActive={selectedItem === 5}
            onClick={() => setSelectedItem(5)}
            color="#FF00FF"
          >
            <Link to={"/outros"}>Outros</Link>
            {selectedItem === 5 && <NavIndicator className="nav-indicator" />}
          </NavItem>
        </NavBar>
      </NavBarContainer>

      <img src={iconAction}></img>

    </Container>

    
  )
}
