import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Pesquisa from './pages/Pesquisa';
import RelatedArtists from './pages/RelatedArtists';
import Artists from './pages/Artists';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Redirect to="/pesquisa" />
                </Route>
                <Route path="/pesquisa" component={Pesquisa} />
                <Route path="/artistas/:name" component={Artists} />
                <Route path="/artistasrelacionados/:id" component={RelatedArtists} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;