import React from 'react';
import './App.css';
import logo from './assets/images/logo.png'
import { FiltersContainer } from './components/Filters/FiltersContainer';
import TicketsContainer from './components/Tickets/TicketsContainer';

function App() {
    return (
        <div className="App">
            <div className='logo' >
                <img src={logo} alt='' />
            </div>
            <div className='app-wrapper'>
                <FiltersContainer />
                <TicketsContainer />
            </div>
        </div>
    );
}

export default App;
