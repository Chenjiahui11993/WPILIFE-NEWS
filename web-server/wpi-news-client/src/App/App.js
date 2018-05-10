import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.js';
import './App.css';
import React from 'react';
import NewsPanel from '../NewsPanel/NewsPanel';
import logo from './200.jpg';

class App extends React.Component {
    render() {
        return (
            <div>
                <img className='logo' alt='logo' src={logo} />
                <div className='container'>
                    <NewsPanel />
                </div>
            </div>
        );
    }
}
export default App;