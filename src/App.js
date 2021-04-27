import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom'

import './App.css'
import Home from './pages/Home/Home'
import Category from './pages/Category/Category'
import Favourites from './pages/Favourites/Favourites'
import Songs from './pages/Songs/Songs'
import StylePony from './pages/StylePony/StylePony'
import Header from './components/Header'
import PonyDetail from './pages/Category/PonyDetail'

const App = () => {
    const [favourites, setFavourites] = useState([])

    const toggleFavourite = (ponyId) => {
        // Handle logic of adding and removing id from favourites
        const found = favourites.includes(ponyId)
        if (found) {
            setFavourites(favourites.filter((e) => e !== ponyId))
        } else {
            setFavourites((prev) => [...prev, ponyId])
        }
    }

    return (
        <>
            <main>
                <Header />
                <Switch>
                    <Route exact path='/'>
                        <Home />
                    </Route>

                    <Route exact path='/category'>
                        <Category />
                    </Route>
                    <Route path='/category/:ponyCat/:ponyId'>
                        <PonyDetail
                            onFavouriteClick={toggleFavourite}
                            favourites={favourites}
                        />
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
