var React    = require('react');
var ReactDOM = require('react-dom');


// ROUTER
var Router = require('react-router-dom').BrowserRouter;
var Route  = require('react-router-dom').Route;

// Components importés
var Navbar    = require('./navbar');
var HomeTitle = require('./homeTitle');
var About     = require('./about');
var Shop     = require('./shop');




class Home extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (

        <div className="">
            <Navbar/>
            <HomeTitle/>
        </div>
            );
    }
}

ReactDOM.render(
    <Router>
            <div>
                <Route exact path="/" component={Home}/>
                <Route path="/shop" component={Shop}/>
                <Route path="/about" component={About}/>

            </div>
    </Router>
    ,
    document.getElementById("content")
    );
