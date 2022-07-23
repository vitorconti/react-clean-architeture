import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Login } from '@/presentation/pages'

type Props = {
    makeLogin: React.FC
}

const Router: React.FC<Props> = ({ makeLogin }) => {
    return (
        //@ts-ignore
        <BrowserRouter>
            <Switch>
                <Route path="/login" exact component={makeLogin} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router
