import { AbBotao, AbCampoTexto, AbModal } from "ds-alurabooks"
import React, { useState } from "react"
import imagemPrincipal from './assets/login.png'
import './ModalCadastroUsuario.css'
import http from "../../http"

interface PropsModalCadastroUsuario {
    aberta: boolean,
    aoFechar: () => void
}

const ModalCadastroUsuario = ({aberta, aoFechar} : PropsModalCadastroUsuario) => {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [endereco, setEndereco] = useState('')
    const [complemento, setComplemento] = useState('')
    const [cep, setCep] = useState('')
    const [senha, setSenha] = useState('')
    const [senhaConfirmada, setSenhaConfirmada] = useState('')


    const aoSubmeterFormulario = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()
        const usuario = {
            nome,
            email,
            endereco,
            complemento,
            cep,
            senha,
            senhaConfirmada
        }

        const url = 'public/registrar'
        http.post(url, usuario)
            .then(() => {
                alert('Usuário cadastrado!')
                setNome('')
                setEmail('')
                setEndereco('')
                setComplemento('')
                setCep('')
                setSenha('')
                setSenhaConfirmada('')
                aoFechar()
            })
            .catch(() => {
                alert('OPS! Alguma coisa deu errado!')
            })
    }
    return (
        <AbModal
            titulo="Cadastrar"
            aberta={aberta}
            aoFechar={aoFechar}>
            <div className="corpoModalCadastro">
                <figure>
                    <img src={imagemPrincipal} alt="Monitor com uma fechadura e uma porta ao lado" />
                </figure>

                <form onSubmit={aoSubmeterFormulario}>
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