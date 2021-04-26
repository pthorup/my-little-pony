import React from 'react'
import { Route, Switch } from 'react-router-dom'

import './App.css'
import Home from './pages/Home/Home'
import Category from './pages/Category/Category'
import Favourites from './pages/Favourites/Favourites'
import Songs from './pages/Songs/Songs'
import StylePony from './pages/StylePony/StylePony'
import Header from './components/Header'

const App = () => {
    return (
        <>
            <main>
                <Header />
                <Switch>
                    <Route exact path='/'>
                        <Home />
                    </Route>

                    <Route path='/category'>
                        <Category />
                    </Route>
                    <Route path='/favourites'>
                        <Favourites />
                    </Route>
                    <Route path='/songs'>
                        <Songs />
                    </Route>
                    <Route path='/style-pony'>
                        <StylePony />
                    </Route>
                </Switch>
            </main>
        </>
    )
}

export default App
