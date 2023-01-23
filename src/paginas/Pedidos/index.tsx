import { AbBotao } from "ds-alurabooks"
import './Pedidos.css'

import axios from 'axios'
import { useEffect } from "react"
import { json } from "stream/consumers"
import { IPedido } from "../../interfaces/IPedido"

const Pedidos = () => {

    useEffect(() => {
        const token = sessionStorage.getItem('token')
        const url = 'http://localhost:8000/pedidos'

        axios.get<IPedido[]>(url, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(response => console.log(response.data))
        .catch(erro => console.log(erro))
    }, [])

    return (
        <section className="pedidos">
            <h1>Meus Pedidos</h1>

           <div className="pedido">
                <ul>
                    <li>Pedido: <strong>123</strong></li>
                    <li>Data do pedido: <strong>09/01/2023</strong></li>
                    <li>Valor total: <strong>R$ 42,00</strong></li>
                    <li>Entrega realizada em: <strong>10/02/2023</strong></li>
                </ul>

                <AbBotao texto="Detalhes"/>
           </div>
        </section>
    )
}

export default Pedidos