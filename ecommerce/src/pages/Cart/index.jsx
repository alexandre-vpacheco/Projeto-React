import { useLocation, Link } from "react-router-dom";
import { AiOutlineMail } from "react-icons/ai";


export function Cart(){
    const location = useLocation();
   
   return(
<>
    <p><h2>Seu carrinho de compras</h2></p>
    <p><h1>Subtotal do seu pedido: </h1></p>
    
</>
    )
}



