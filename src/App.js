import React, {Component} from 'react';
import './App.css';
import NameBadge from "./NameBadge";


class App extends Component {
    render() {
        return (
            <div className="App">
                {/*calling the NameBadge component*/}
                <NameBadge/>
            </div>
        );
    }
}

export default App;
