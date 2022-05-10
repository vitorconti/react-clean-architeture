import {
    Footer,
    Input,
    LoginHeader as Header,
    FormStatus
} from '@/presentation/components'
import React, { useState } from 'react'
import Styles from './login-styles.scss'
import Context from '@/presentation/contexts/form/form-context'

const Login: React.FC = () => {
    const [state] = useState({
        isLoading: false
    })
    const [errorState] = useState({
        email: 'Campo obrigatório',
        password: 'Campo obrigatório',
        main: ''
    })
    return (
        <div className={Styles.login}>
            <Header />
            <Context.Provider value={{ state, errorState }}>
                <form className={Styles.form}>
                    <h2>Login</h2>
                    <Input
                        type="email"
                        name="email"
                        id=""
                        placeholder="Digite seu e-mail"
                    />
                    <Input
                        type="password"
                        name="password"
                        id=""
                        placeholder="Digite sua senha"
                    />

                    <button
                        disabled
                        data-testid="submit"
                        className={Styles.submit}
                        type="submit"
                    >
                        Entrar
                    </button>
                    <span className={Styles.link}>Criar conta</span>
                    <FormStatus />
                </form>
            </Context.Provider>

            <Footer />
        </div>
    )
}
export default Login
