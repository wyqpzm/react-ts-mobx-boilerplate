import React from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import { Home, About, Contact } from './pages'

import './App.scss'

function App() {
    return (
        <div className="app">
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>

            <section className="content">
                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/contact">
                        <Contact />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </section>
        </div>
    )
}

export default App
