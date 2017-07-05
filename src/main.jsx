$ = JQuery = require('jquery');
var React = require('react');
var ReactDom = require('react-dom');
var Home = require('./components/homePage.jsx');
var About = require('./components/about/aboutPage.jsx')
var Header = require('./components/common/header.jsx')

class App extends React.Component {
    render() {
        var Child;
        Child = Home; 
        switch(this.props.route) {
            case 'about' : Child = About; break;
            default : Child = Home;
        }
        return (
            <div>
                <Header />
                <Child />
            </div>
        );
    }
}

function render() {
    var route = window.location.hash.substr(1);
    ReactDom.render(<App route={route} />, document.getElementById('app'));
}

window.addEventListener('hashchange', render);
