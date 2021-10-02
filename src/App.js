import './App.css'
import { createContext, useState } from "react";
import { Home, SearchPage, Header, Footer, NotFound, BecomeHost } from './GetComponents'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './Login/Login/Login'


export const UserContext = createContext();

function App() {
    const [loggedInUser, setLoggedInUser] = useState({});

    return (

        <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
            <div className='app'>
                <Router>
                    <Header />
                    <Switch>
                        <Route exact path='/'>
                            <Home />
                        </Route>
                        <Route path='/search'>
                            <SearchPage />
                        </Route>

                        <Route path='/becomehost'>
                            <BecomeHost />
                        </Route>
                        <Route path="/login">
                            <Login />
                        </Route>
                        <Route path='*'>
                            <NotFound />
                        </Route>
                    </Switch>
                    <Footer />
                </Router>
            </div>
        </UserContext.Provider>
    )
}

export default App
