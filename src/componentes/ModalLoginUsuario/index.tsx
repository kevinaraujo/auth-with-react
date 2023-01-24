import { AbBotao, AbCampoTexto, AbModal } from "ds-alurabooks"
import React, { useState } from "react"
import imagemPrincipal from './assets/login.png'
import './ModalLoginUsuario.css'
import http from "../../http"

interface PropsModalLoginUsuario {
    aberta: boolean,
    aoFechar: () => void,
    aoEfetuarLogin: () => void
}

const ModalLoginUsuario = ({aberta, aoFechar, aoEfetuarLogin} : PropsModalLoginUsuario) => {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')


    const aoSubmeterFormulario = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()
        const usuario = {
            email,
            senha
        }

        const url = 'public/login'
        http.post(url, usuario)
            .then(resposta => {
                sessionStorage.setItem('token', resposta.data.access_token)
                setEmail('')
                setSenha('')
                aoEfetuarLogin()
            })  
            .catch(erro => {
                if(erro?.response.data?.message) {
                    alert(erro?.response.data?.message)
                } else {
                    alert('Aconteceu um erro inesperado ao logar.')
                }
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