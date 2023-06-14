import { useState, useEffect } from "react";
import { getLocal, setLocal } from "../../services/localStorage";
import Button from "../../common/Button";
import {
    ContainerCart,
    CartProduct
} from './style.js';


export function Cart() {
    const [listCart, setListCart] = useState([]);

    useEffect(()=> {
        if(getLocal("cartList").length != 0) {
            setListCart(JSON.parse(getLocal("cartList")));
        }
    }, []);

    function removeCartItem(id) {
        let cartList = JSON.parse(getLocal('cartList'));
        let newCartList = cartList.filter(c => {
            if(c.id != id)
                return c;
        });

        setLocal('cartList', JSON.stringify(newCartList));
        window.location.reload();
    }

    return (
        <ContainerCart>
            {
                listCart.map(p => {
                    return (
                        <CartProduct key={p.id}>
                            <img src={p.image}/>
                            <h3>{p.name}</h3>
                            <span>R${p.totalPrice.toFixed(2)}</span>
                            <span>{p.quantity}x unidades</span>
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
    )
}



