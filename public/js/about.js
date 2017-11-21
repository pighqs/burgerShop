var React = require('react');
var Navbar    = require('./navbar');

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
                    <h2>Livraison Offerte</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita molestiae cum neque iusto a esse rem suscipit quaerat deleniti tenetur culpa facilis provident id, alias veritatis, nostrum rerum fugit consequatur magni laudantium. Dolor alias, porro.</p>
                </div>
            </section>
        </div>
        );
   }
}

module.exports = About;
