import { AbBotao } from "ds-alurabooks"
import './Pedidos.css'

import axios from 'axios'
import { useEffect, useState } from "react"
import { IPedido } from "../../interfaces/IPedido"

const Pedidos = () => {
    const [pedidos, setPedidos] = useState<IPedido[]>([])
    const formatador = Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'});
    
    useEffect(() => {
        const token = sessionStorage.getItem('token')
        const url = 'http://localhost:8000/pedidos'

        axios.get<IPedido[]>(url, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(response => setPedidos(response.data))
        .catch(erro => console.log(erro))
    }, [])

    return (
        <section className="pedidos">
            <h1>Meus Pedidos</h1>

            {pedidos.map(pedido => (
                <div className="pedido" key={pedido.id}>
                    <ul>
                        <li>Pedido: <strong>{pedido.id}</strong></li>
                        <li>Data do pedido: <strong>{new Date(pedido.data).toLocaleDateString()}</strong></li>
                        <li>Valor total: <strong>{formatador.format(pedido.total)}</strong></li>
                        <li>Entrega realizada em: <strong>{new Date(pedido.entrega).toLocaleDateString()}</strong></li>
                    </ul>

                    <AbBotao texto="Detalhes"/>
            </div>
           ))}
        </section>
    )
}

export default Pedidos