import React, { Component } from 'react'
import { HashRouter,Route,Switch } from 'react-router-dom'
import Home from '../pages/Home/index'
import Life from '../pages/Life/index'
import Mine from '../pages/Mine/index'
import Shop from '../pages/Shop/index'
import NotFound from '../pages/NotFound/index'
import City from '../pages/City/index'
import Search from '../pages/Search/index'
import Layout from '../Layout'
export default class AppRouter extends Component {
    render() {
        return (
            <HashRouter>
                <Layout path="/">
                <Switch>
                   <Route exact path="/" component={ Home}></Route>
                   <Route  path="/life" component={ Life}></Route> 
                   <Route  path="/mine" component={ Mine}></Route>
                   <Route  path="/shop" component={ Shop}></Route>
                   <Route  path="/city" component={ City}></Route>
                   <Route  path="/search/:content" component={ Search}></Route>
                   <Route  path="*" component={ NotFound}></Route>
                </Switch>
                </Layout>
            </HashRouter>
        )
    }
}
