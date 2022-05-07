import Footer from '@/presentation/components/footer/footer'
import Input from '@/presentation/components/input/input'
import Header from '@/presentation/components/login/login-header'
import Spinner from '@/presentation/components/spinner/spinner'
import React from 'react'
import Styles from './login-styles.scss'

const Login: React.FC = () => {
    return (
        <div className={Styles.login}>
            <Header />
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

                <button className={Styles.submit} type="submit">
                    Entrar
                </button>
                <span className={Styles.link}>Criar conta</span>
                <div className={Styles.errorWrap}>
                    <Spinner className={Styles.spinner} />
                    <span className={Styles.error}>Erro</span>
                </div>
            </form>
            <Footer />
        </div>
    )
}
export default Login
