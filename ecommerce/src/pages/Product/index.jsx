import { useState, useEffect } from 'react';
import { api } from '../../services/api';
import { getLocal } from '../../services/localStorage';
import {
    ContainerProduct
} from './style.js';

function Product() {

    const [product, setProduct] = useState({});
    const [isLoad, setIsLoad] = useState(false);
    const idProduct = getLocal('idProduct');

    useEffect(() => {
        async function fetchData() {
            await api.get(`/produtos/${idProduct}`).then(response => {
                setProduct(response.data);
                setIsLoad(true);
            }).catch(err => {
                console.log(err);
            })
        }
        
        fetchData();
    }, []);

    return(
        <ContainerProduct>
        {
            isLoad  ?
            <>
                <img src={product.imagem} alt={`imagem do produto ${product.nome}`}/>
                <h1>{product.nome}</h1>
                <p>Valor: R${product.valorUnitario.toFixed(2)}</p>
                <p>Descrição: {product.descricao}</p>
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