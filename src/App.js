import React, { useState } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {pageRandom} from './pages/pageRandom'
import {Navigation} from './components/organisms /Navigation'
import {pageLinkGenerator} from './pages/pageLinkGenerator'
import {pageImageUpload} from './pages/pageImageUpload'
import {useTheme} from './useTheme/useTheme'
import './App.css';


function App() {
    const [darkMode, setDarkMode] = useState(false);
    useTheme(darkMode ? "dark" : "light")

    return (
    <div className="App theme-switch">
        <input
            id="theme-toggler"
            type="checkbox"
            checked={darkMode}
            onChange={e => setDarkMode(e.target.checked)}/>
        <BrowserRouter>
            <Navigation/>
            <Switch>
                <Route path={"/pageRandom"} component={pageRandom}/>
                <Route path={"/pageLinkGenerator"} component={pageLinkGenerator}/>
                <Route path={"/pageImageUpload"} component={pageImageUpload}/>
            </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
