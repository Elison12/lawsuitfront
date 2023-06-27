import React, { Suspense } from "react";
import { BrowserRouter,  Redirect,  Route, Switch } from "react-router-dom";
import { isAuthenticated } from "./services/auth";
import CircularProgress from '@mui/material/CircularProgress';
import Home from "./pages/home";
import Login from "./pages/login";
import Entrada from "./pages/caixadeentrada";
const Routes = () => {

    const PrivateRoute = ({ component: Component, ...rest }) => (
        <Route
            {...rest}
            render={(props) =>
                isAuthenticated() ? (
                    <div>
                        <Suspense fallback={<CircularProgress />}>
                            <Component {...props} />
                        </Suspense>
                    </div>
                ) : (
                    <Redirect
                        to={{ pathname: "/", state: { from: props.location } }}
                    />
                )
            }
        />
    );

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login} />
                <PrivateRoute exact path="/home" component={Home} />
            </Switch>
        </BrowserRouter>
    );

}

export default Routes;