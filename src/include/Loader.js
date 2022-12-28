import React from "react";
import logo from '../logo.svg';

function Loader(props) {

    return (
        <div id="loader-wrapper">
            <div className="loader">
                <img src={logo} alt="IncH Chat" />
                <h2>Veuillez patienter...</h2>
            </div>
        </div>
    )
}

export default Loader;