"use strict";

var React = require("react");

class Home extends React.Component{
    render() {
        return (
            <div className="jumbotron">
                <h1> Pluralsight Admin </h1>
                <p> React, React Router, and Flux </p>
            </div>
        );
    }
}

module.exports = Home;