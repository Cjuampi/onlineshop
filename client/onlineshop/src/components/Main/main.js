import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../../pages/Home/home';
const Main = ()=>{
    return(
        <main>
            <Switch>
                <Route path="/" component={Home} exact/>
            </Switch>
        </main>
    );
}

export default Main;