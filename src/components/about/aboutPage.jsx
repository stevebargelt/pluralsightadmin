"use strict";

var React = require("react");

class About extends React.Component{
    render() {
        return (
            <div className="jumbotron">
                <h1> About </h1>
                <p>
                    This application uses the following technology:
                    <ul>
                        <li>React</li>
                        <li>React Router</li>
                        <li>Flux</li>
                        <li>Node</li>
                        <li>Gulp</li>
                        <li>Browersify</li>
                        <li>Bootstrap</li>
                    </ul>
                </p>
            </div>
        );
    }
}

module.exports = About;