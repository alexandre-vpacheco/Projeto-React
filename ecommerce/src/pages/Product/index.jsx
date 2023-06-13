import { useState, useEffect } from 'react';
import { api } from '../../services/api';
import { getLocal } from '../../services/localStorage';
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

        fetchData();
    }, []);
    function subtractQuantity() {
        if(productQuantity >0) { 
            setProductQuantity(productQuantity-1)
            setTotalPrice(totalPrice - product.valorUnitario)
        }
    }
    function sumQuantity() {
        if (productQuantity >= product.qtdEstoque) {
            alert("Quantidade de estoque excedida")
        } 
        else {
         setProductQuantity (productQuantity +1)
         setTotalPrice(totalPrice + product.valorUnitario)
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
                                <button onClick={()=> subtractQuantity()}>-</button>
                                <spam>{productQuantity}</spam>
                                 <button onClick={ () => sumQuantity()}>+</button>   
                            </div>
                                <Button text="Adicionar ao carrinho" color="white" background="black" onClick="" active={true} ></Button>
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
