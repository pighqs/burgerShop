var React = require('react');
var Navbar    = require('./navbar');
var Link   = require('react-router-dom').Link;



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

module.exports = Shop;
