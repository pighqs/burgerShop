var React = require('react');


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

module.exports = HomeTitle;
