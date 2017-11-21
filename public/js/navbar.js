var React = require('react');
var Link   = require('react-router-dom').Link;


class Navbar extends React.Component {

    constructor() {
            super();
        }

    render() {
        return (

            <nav className="navbar navbar-burger navbar-expand-lg navbar-dark bg-dark">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link"><Link to="/">Home</Link></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link"><Link to="/shop">Shop</Link></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link"><Link to="/about">About Us</Link></a>
                        </li>
                    </ul>
                </div>
            </nav>

            );
    }
}


module.exports = Navbar;
