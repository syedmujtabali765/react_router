import React from 'react';
import { NavLink } from 'react-router-dom';
import "../css/home.css";

const Home = () => {
    return (
        <>
            <div id="main">
                <ul className="navbar">
                    <li className="active_class or"><NavLink to="/covid19">COVID 19</NavLink></li>
                    <li className="active_class bl"><NavLink to="/weather">WEATHER</NavLink></li>
                </ul>
            </div>
        </>
    )
}

export default Home;