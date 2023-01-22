import { AbBotao } from "ds-alurabooks"

const Pedidos = () => {
    return (
        <section className="pedidos">
            <h1>Meus Pedidos</h1>

           <div>
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