import { useState, useEffect } from "react";
import { getLocal, setLocal } from "../../services/localStorage";
import { api } from '../../services/api';
import {
    Container,
    Titulo
} from './style.js';

function SalesHistory() {

    const [requests, setRequests] = useState([]);

    useEffect(() => {
        async function getRequests() {
            await api.get('/pedidos').then(response => {
                const clientRequest = response.data.filter(item => {
                    if (item.cliente.idCliente == getLocal('idClient'))
                        return item
                })
                setRequests(clientRequest);
                console.log(clientRequest);
            }).catch(err => {
                console.log(err);
            })
        }

        getRequests();
    }, [])

    return (
        <>
            <Titulo>Histórico de Compras de {getLocal('user')}</Titulo>
            <Container>

                {
                    requests.map((item) => {
                        return (
                            <div className="pedido" key={item.idPedido}>
                                <h2>Pedido (id: {item.idPedido})</h2>
                                <span>Data do pedido: {item.dataPedido.substring(0, 10)}</span>
                                <span>Horário: {item.dataPedido.substring(11, 19)}</span>
                                <span>Valor total: R$ {item.valorTotal.toFixed(2)}</span>
                                <h3>Itens comprados</h3>
                                {
                                    item.listaItemPedido.map(itemPedido => {
                                        return (
                                            <div className="itensPedido">
                                                <span>{itemPedido.nome}</span>
                                                <span>Quantidade comprada: {itemPedido.quantidade}</span>
                                                <span>Valor: R$ {itemPedido.precoVenda.toFixed(2)}</span>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        )
                    })
                }
            </Container>
        </>
    )


}

export default SalesHistory;