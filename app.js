console.log("kikou");
var React = require('react');
var ReactDOM = require('react-dom');

var Router      = ReactRouterDOM.BrowserRouter;
var Route       = ReactRouterDOM.Route;
var Link        = ReactRouterDOM.Link;

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

class HomeTitle extends React.Component {
    constructor() {
       super();
     }

     render() {
       return (
        <div className="home-title">
                    <h1>Burgers Home Made</h1>
                    <p>L'atelier du Hamburger</p>
                </div>
        );
   }
}

class About extends React.Component {
    constructor() {
       super();
     }

     render() {
       return (
        <div>
            <Navbar/>
            <section className="home-infos row">
                <div className="col-sm-4">
                    <i className="fa fa-cutlery fa-4x" aria-hidden="true"></i>
                    <h2>Produits Bios</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi at, illo quae earum deleniti eveniet commodi magnam. Iusto voluptas totam vitae, dignissimos eligendi ipsa, perferendis qui quas dolore, laudantium veritatis voluptatum, maiores sint repudiandae doloribus.</p>
                </div>
                <div className="col-sm-4">
                    <i className="fa fa-clock-o fa-4x" aria-hidden="true"></i>
                    <h2>ouvert 7 jours sur 7</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium deleniti optio nisi sed, at, dolor qui excepturi exercitationem error delectus earum provident aut numquam, vero necessitatibus iure tempora accusantium rerum ad impedit? Voluptate, dignissimos, id.</p>
                </div>
                <div className="col-sm-4">
                    <i className="fa fa-bicycle fa-4x" aria-hidden="true"></i>
                    <h2>Livraison Gratuite</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita molestiae cum neque iusto a esse rem suscipit quaerat deleniti tenetur culpa facilis provident id, alias veritatis, nostrum rerum fugit consequatur magni laudantium. Dolor alias, porro.</p>
                </div>
            </section>
        </div>
        );
   }
}

class Shop extends React.Component {

     constructor() {
       super();
     }

     render() {
       return (
         <div>

         <Navbar/>


         <div className="burgerList">
           <div className="">

             <div className="row text-center">
             <div className="card offset-1 col-10 offset-sm-1 col-sm-4">
               <img className="card-img-top" src="https://lacapsule.academy/wks2/burger_1.png"/>
               <div className="card-body">
                 <h4 className="card-title">Burger New-York</h4>
                 <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                 <a href="#" className="btn btn-sm">add</a>
               </div>
             </div>
             <div className="card offset-1 col-10 offset-sm-1 col-sm-4">
               <img className="card-img-top" src="https://lacapsule.academy/wks2/burger_2.png"/>
               <div className="card-body">
                 <h4 className="card-title">Burger Amburger</h4>
                 <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                 <a href="#" className="btn btn-sm">add</a>
               </div>
             </div>
             <div className="card offset-1 col-10 offset-sm-1 col-sm-4">
               <img className="card-img-top" src="https://lacapsule.academy/wks2/burger_3.png"/>
               <div className="card-body">
                 <h4 className="card-title">Burger Poulet</h4>
                 <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                 <a href="#" className="btn btn-sm">add</a>
               </div>
             </div>

              </div>
           </div>
          </div>

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
