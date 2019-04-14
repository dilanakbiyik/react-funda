import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Detail from "./components/Detail";
import Error from "./components/Error";

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <header className="App-header">
                    </header>
                    <Route path="/" exact component={Error} />
                    <Route path="/:id" exact component={Detail} />
                </div>
            </Router>
        );
    }
}

export default App;
