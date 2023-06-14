import { useState, useEffect } from 'react';
import { api } from '../../services/api';
import { getLocal, setLocal } from '../../services/localStorage';
import Button from '../../common/Button';
import {
    ContainerProduct,
    ContainerCart,
    ContainerDescricao,
    ContainerImage
} from './style.js';

function Product() {

    const [product, setProduct] = useState({});
    const [isLoad, setIsLoad] = useState(false);
    const [productQuantity, setProductQuantity] = useState(1);
    const idProduct = getLocal('idProduct');
    const [totalPrice, setTotalPrice] = useState(0);
    const [clients, setClients] = useState([]);

    useEffect(() => {
        async function fetchData() {
            await api.get(`/produtos/${idProduct}`).then(response => {
                setProduct(response.data);
                setTotalPrice(response.data.valorUnitario);
                setIsLoad(true);
            }).catch(err => {
                console.log(err);
            })
        }

        async function getClients() {
            await api.get('/clientes').then(response => {
                setClients(response.data);
            }).catch(err => {
                console.log(err);
            })
        }

        fetchData();
        getClients();
    }, []);

    function subtractQuantity() {
        if (productQuantity > 0) {
            setProductQuantity(productQuantity - 1)
            setTotalPrice(totalPrice - product.valorUnitario)
        }
    }

    function sumQuantity() {
        if (productQuantity >= product.qtdEstoque) {
            alert("Quantidade de estoque excedida")
        }
        else {
            setProductQuantity(productQuantity + 1)
            setTotalPrice(totalPrice + product.valorUnitario)
        }
    }

    function addCart() {
        if (getLocal('user') === '') {
            alert("Você precisa está logado para adicionar ao carrinho 😉");
        }
        else {
            let cartList = [];
            if (getLocal('cartList').length != 0) {
                cartList = JSON.parse(getLocal('cartList'));
            } else {
                cartList = getLocal('cartList');
            }

            const client = clients.filter(c => {
                return c.user.id === getLocal('userId');
            });

            const cartProduct = {
                id: product.idProduto,
                name: product.nome,
                totalPrice: totalPrice,
                quantity: productQuantity,
                image: product.imagem,
                cliente: client,
            }

            cartList.push(cartProduct);

            setLocal('cartList', JSON.stringify(cartList));
            window.location.href = '/cart';
        }
    }


    return (
        <ContainerProduct>
            {
                isLoad ?
                    <>
                        <ContainerImage>
                            <img src={product.imagem} alt={`imagem do produto ${product.nome}`} />
                        </ContainerImage>
                        <ContainerDescricao>
                            <h1>{product.nome}</h1>
                            <p>Valor: R${product.valorUnitario.toFixed(2)}</p>
                            <p>Descrição: {product.descricao}</p>
                        </ContainerDescricao>
                        <ContainerCart>
                            <h2>Preço R${totalPrice.toFixed(2)}</h2>
                            <div id="containerButton">
                                <button onClick={() => subtractQuantity()}>-</button>
                                <spam>{productQuantity}</spam>
                                <button onClick={() => sumQuantity()}>+</button>
                            </div>
                            <Button text="Adicionar ao carrinho" color="white" background="black" onClick={() => addCart()} active={true} ></Button>
                        </ContainerCart>
                    </>
                    :
                    <>
                        carregando...
                    </>
            }
        </ContainerProduct>

    )
}

export default Product;
