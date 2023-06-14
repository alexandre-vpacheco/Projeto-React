import { useState, useEffect } from "react";
import { getLocal, setLocal } from "../../services/localStorage";
import { api } from '../../services/api';
import Button from "../../common/Button";
import {
    Container,
    ContainerTotal,
    ContainerCart,
    CartProduct
} from './style.js';


export function Cart() {
    const [listCart, setListCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [buttonActive, setButtonActive] = useState(false);
    const [loadRequest, setLoadRequest] = useState(false);

    useEffect(() => {
        if (getLocal("cartList").length != 0) {
            const list = JSON.parse(getLocal("cartList"))
            setListCart(list);
            let price = 0;

            list.forEach(product => {
                return price += parseFloat(product.totalPrice);
            })

            setTotal(price);
            setButtonActive(true);
        }
    }, []);

    function removeCartItem(id) {
        let cartList = JSON.parse(getLocal('cartList'));
        let newCartList = cartList.filter(c => {
            if (c.id != id)
                return c;
        });

        setLocal('cartList', JSON.stringify(newCartList));
        window.location.reload();
    }

    async function endOfSale() {
        let idPedido = 1;

        const request = {
            status: 1,
            valorTotal: total,
            cliente: {
                idCliente: listCart[0].cliente[0].idCliente,
            }
        }

        await api.post('/pedidos', request).then(response => {
            idPedido = response.data.idPedido;
        }).catch(err => {
            console.log(err);
        })

        const requestProductList = [];

        listCart.forEach(prod => {
            const prodObj = {
                quantidade: prod.quantity,
                precoVenda: prod.totalPrice,
                percentualDesconto: 0,
                valorBruto: prod.totalPrice,
                valorLiquido: prod.totalPrice,
                pedido: {
                    idPedido: idPedido,
                },
                produto: {
                    idProduto: prod.id,
                }
            }

            requestProductList.push(prodObj)
            api.post('/itens_pedidos', prodObj).then(response => {
                console.log(response)
            }).catch(err => {
                // if(err.code === 'ERR_BAD_RESPONSE'){
                //     setLocal('cartList', [])
                //     window.location.href = '/';
                // }
                console.log(err);
            })
        })

        setLoadRequest(true);

        setTimeout(() => {
            setLocal('idClient', listCart[0].cliente[0].idCliente);
            setLocal('cartList', [])
            window.location.href = '/sales-history';
        }, 1000);
    }

    return (
        <Container>

            <ContainerTotal>
                {
                    loadRequest ?
                        <>
                            <h3>Finalizando Pedido...</h3>
                        </> :
                        <>
                            <h2>Total do Carrinho</h2>
                            <span>R$ {total.toFixed(2)}</span>
                            <Button
                                onClick={() => endOfSale()}
                                color="#fff"
                                background="#2dd660"
                                active={buttonActive}
                                text="Finalizar Compra"
                                width="220px"
                            ></Button>
                            <Button
                                onClick={() => {window.location.href = '/';}}
                                color="#fff"
                                background="#d62d44"
                                active={buttonActive}
                                text="Continuar Comprando"
                                width="220px"
                            ></Button>
                        </>
                }

            </ContainerTotal>
            <h2>Produtos Adicionados ao Carrinho</h2>
            <ContainerCart>

                {
                    listCart.map(p => {
                        return (
                            <CartProduct key={p.id}>
                                <img src={p.image} />
                                <h3>{p.name}</h3>
                                <span>R${p.totalPrice.toFixed(2)}</span>
                                <span>{p.quantity} unidades</span>
                                <Button
                                    onClick={() => removeCartItem(p.id)}
                                    color="#fff"
                                    background="#d62d44"
                                    active={true}
                                    text="Remover do Carrinho"
                                ></Button>
                            </CartProduct>
                        )
                    })
                }
            </ContainerCart>
        </Container>

    )
}



