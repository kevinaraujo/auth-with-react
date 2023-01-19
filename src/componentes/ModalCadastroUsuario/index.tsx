import { AbBotao, AbCampoTexto, AbModal } from "ds-alurabooks"
import { useState } from "react"
import imagemPrincipal from './assets/login.png'

import './ModalCadastroUsuario.css'

const ModalCadastroUsuario = () => {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [endereco, setEndereco] = useState('')
    const [complemento, setComplemento] = useState('')
    const [cep, setCep] = useState('')
    const [senha, setSenha] = useState('')
    const [senhaConfirmada, setSenhaConfirmada] = useState('')


    return (
        <AbModal
            titulo="Cadastrar"
            aberta={true}
            aoFechar={() => console.log('fechar')}>
            <div className="corpoModalCadastro">
                <figure>
                    <img src={imagemPrincipal} alt="Monitor com uma fechadura e uma porta ao lado" />
                </figure>

                <form>
                    <AbCampoTexto
                        label='Nome'
                        value={nome}
                        onChange={setNome}
                    />
                    <AbCampoTexto
                        label='Email'
                        value={email}
                        onChange={setEmail}
                    />
                    <AbCampoTexto
                        label='Endereço'
                        value={endereco}
                        onChange={setEndereco}
                    />
                    <AbCampoTexto
                        label='Complemento'
                        value={complemento}
                        onChange={setComplemento}
                    />
                    <AbCampoTexto
                        label='CEP'
                        value={cep}
                        onChange={setCep}
                    />
                    <AbCampoTexto
                        label='Senha'
                        value={senha}
                        onChange={setSenha}
                    />
                    <AbCampoTexto
                        label='Confirmação de Senha'
                        value={senhaConfirmada}
                        onChange={setSenhaConfirmada}
                    />
                    <footer>
                        <AbBotao
                            texto='Cadastrar'
                        />
                    </footer>
                </form>
            </div>
        </AbModal>
    )
}

export default ModalCadastroUsuario