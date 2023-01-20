import { AbBotao, AbCampoTexto, AbModal } from "ds-alurabooks"
import React, { useState } from "react"
import imagemPrincipal from './assets/login.png'
import axios from 'axios'
import './ModalLoginUsuario.css'

interface PropsModalLoginUsuario {
    aberta: boolean,
    aoFechar: () => void
}

const ModalLoginUsuario = ({aberta, aoFechar} : PropsModalLoginUsuario) => {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')


    const aoSubmeterFormulario = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()
        const usuario = {
            email,
            senha
        }

        const url = 'http://localhost:8000/public/login'
        axios.post(url, usuario)
            .then(() => {
                alert('Usuário logado!')
                setEmail('')
                setSenha('')
                aoFechar()
            })
            .catch(() => {
                alert('OPS! Alguma coisa deu errado!')
            })
    }
    return (
        <AbModal
            titulo="Login"
            aberta={aberta}
            aoFechar={aoFechar}>
            <div className="corpoModalLogin">
                <figure>
                    <img src={imagemPrincipal} alt="Monitor com uma fechadura e uma porta ao lado" />
                </figure>

                <form onSubmit={aoSubmeterFormulario}>
                    <AbCampoTexto
                        label='Email'
                        value={email}
                        onChange={setEmail}
                    />
                    <AbCampoTexto
                        label='Senha'
                        value={senha}
                        onChange={setSenha}
                    />
                    <footer>
                        <AbBotao
                            texto='Login'
                        />
                    </footer>
                </form>
            </div>
        </AbModal>
    )
}

export default ModalLoginUsuario