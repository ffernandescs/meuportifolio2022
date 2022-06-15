import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Html from '../components/html'
import Javascript from '../components/javascript'

export const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Html}></Route>
                <Route path="/Javascript" component={Javascript}></Route>
            </Switch>
        </BrowserRouter>
    )
}