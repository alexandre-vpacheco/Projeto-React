import { Link, useLocation } from "react-router-dom";
import { 
  Container, 
  NavBarContainer, 
  NavBar, 
  NavItem, 
  NavIndicator,
  ContainerProducts,
  CardProduct,
} from "./style";
import { useEffect, useState } from "react";
import { setLocal, getLocal } from "../../services/localStorage";
import { useProducts } from "../../hooks/useProducts";


export function Home() {
  const location = useLocation();
  const [selectedItem, setSelectedItem] = useState(null);
  //const [products, setProducts] = useState([]);
const {filteredProducts} = useProducts()

  useEffect(() => {
    // Atualizar o item selecionado com base na localização
    const pathToIndex = {
      "/": 1,
      "/animes": 2,
      "/jogos": 3,
      "/filmes": 4,
      "/especiais": 5,
    };

    setSelectedItem(pathToIndex[location.pathname]);
  }, [location.pathname]);

  useEffect(() => {
    let cartList = getLocal('cartList');
    console.log(cartList);
    if(cartList === null) {
      setLocal('cartList', [])
    }
  }, [])

  function goToProduct(id) {
    setLocal('idProduct', id);
    window.location.href = '/product';
  }

  return (
    <Container>
      <NavBarContainer>
        <NavBar>
          <NavItem
            isActive={selectedItem === 1}
            onClick={() => setSelectedItem(1)}
            color="#FF0000"
          >
            <Link to={"/"} className="link">Home</Link>
            {selectedItem === 1 && <NavIndicator className="nav-indicator" />}
          </NavItem>
          <NavItem
            isActive={selectedItem === 2}
            onClick={() => setSelectedItem(2)}
            color="#00FFFF"
          >
            <Link to={"/animes"} className="link">Animes</Link>
            {selectedItem === 2 && <NavIndicator className="nav-indicator" />}
          </NavItem>
          <NavItem
            isActive={selectedItem === 3}
            onClick={() => setSelectedItem(3)}
            color="#9b991a"
          >
            <Link to={"/jogos"} className="link">Jogos</Link>
            {selectedItem === 3 && <NavIndicator className="nav-indicator" />}
          </NavItem>
          <NavItem
            isActive={selectedItem === 4}
            onClick={() => setSelectedItem(4)}
            color="#7CFC00"
          >
            <Link to={"/filmes"} className="link">Filmes</Link>
            {selectedItem === 4 && <NavIndicator className="nav-indicator" />}
          </NavItem>
          <NavItem
            isActive={selectedItem === 5}
            onClick={() => setSelectedItem(5)}
            color="#FF00FF"
          >
            <Link to={"/especiais"} className="link">Especiais</Link>
            {selectedItem === 5 && <NavIndicator className="nav-indicator" />}
          </NavItem>
        </NavBar>
      </NavBarContainer>


      {/*<img src={iconAction}></img>*/}

      <ContainerProducts>
        {filteredProducts.map((p) => {

          let category = '';

          switch(selectedItem) {
            case 2: 
              category = 'Anime';
              break;
            case 3:
              category = 'Jogos';
              break;
            case 4: 
              category = 'Filmes';
              break;
            case 5: 
              category = 'Especiais';
              break;
            default:
              category = '';
          }

          if(category === '') {
            return (
              <CardProduct key={p.idProduto} onClick={() => {goToProduct(p.idProduto)}}>
                <img src={p.imagem} alt={p.descricao} />
                <div>
                  <h1>{p.nome}</h1>
                  <span>R$ {p.valorUnitario.toFixed(2)}</span>
                </div>
              </CardProduct>
            )
          }
          else if(p.categoriaDTO.nome === category) {
            return (
              <CardProduct key={p.idProduto} onClick={() => {goToProduct(p.idProduto)}}>
                <img src={p.imagem} alt={p.descricao} />
                <div>
                  <h1>{p.nome}</h1>
                  <span>R${p.valorUnitario.toFixed(2)}</span>
                </div>
              </CardProduct>
            )
          }
          
        })}
      </ContainerProducts>


    </Container>


  )
}
