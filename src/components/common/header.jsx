"use strict";

var React = require("react");
var ReactDom = require('react-dom');

class Header extends React.Component{
    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <ul className="nav navbar-nav">
                        <li><a href="/#home">Home</a></li>
                        <li><a href="/#about">About</a></li>
                    </ul>
                </div>
            </nav>
        );
    }
}

module.exports = Header;