import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { pageRandom } from './pages/pageRandom'
import { Navigation } from './components/organisms /Navigation'
import { pageLinkGenerator } from './pages/pageLinkGenerator'
import { pageImageUpload } from './pages/pageImageUpload'
import { pageTextInput } from './pages/pageTextInput'
import { pageTest } from './pages/pageTest'
import './App.css';


function App() {
    const [darkMode, setDarkMode] = useState(getInitialMode());

    React.useEffect(() => {
        localStorage.setItem('dark', JSON.stringify(darkMode))
    }, [darkMode])

    function getInitialMode() {
        const isReturningUser = "dark" in localStorage;
        const savedMode = JSON.parse(localStorage.getItem('dark'));
        const userPrefersDark = getPrefColorSchme();
        // if mode was saved -> dark / light
        if (isReturningUser) {
            return savedMode
            // if prefered colour scheme is dark -> dark
        } else if (userPrefersDark){
            return true
        } else {
            // otherwise -> light
            return false
        }
    }

    function getPrefColorSchme () {
        if (!window.matchMedia) return;

        return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }

    return (
    <div className="App theme-switch">
        <div className={darkMode ? "dark-mode" : "light-mode"}>
            <BrowserRouter>
                <Navigation/>
                <Switch>
                    <Route path={"/pageRandom"} component={pageRandom}/>
                    <Route path={"/pageLinkGenerator"} component={pageLinkGenerator}/>
                    <Route path={"/pageImageUpload"} component={pageImageUpload}/>
                    <Route path={"/pageTest"} component={pageTest}/>
                </Switch>
            </BrowserRouter>
            <div className="toggle-container">
                <span className="toggle">
                    <input
                        checked={darkMode}
                        onChange={() => setDarkMode(prevMode => !prevMode)}
                        id="checkbox"
                        className="checkbox"
                        type="checkbox"/>
                        <label htmlFor="checkbox" />
                </span>
            </div>
        </div>
    </div>
  );
}

export default App;
