import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Main from "../Main";
import Liked from "../Liked";
import Shop from "../Shop";
import Search from "../Search";
import Product from "../Product";

const App = () => {

    return (
        <Router>
        <Switch>
            <Route exact path="/" component={Main}/>
            <Route path="/liked" component={Liked}/>
            <Route path="/Shop" component={Shop}/>
            <Route path="/Search" component={Search}/>
            <Route path="/product/:id" component={Product}/>
        </Switch>
      </Router>

    );

    //<PrivateRoute path="/patient" component={DadosCadastrais} />
    //<Route path="/register" component={Register} />
    //<Route exact path="/" component={user.token === "" ? Login : DefaultScreen}/>
    //<PrivateRoute component={NotFound} />

};

export default App;