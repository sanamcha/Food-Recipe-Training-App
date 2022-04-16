import React from "react";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    // <hr></hr>
    <footer className="page-footer brown darken-6">
      <div className="container">
      <div className="row center-align">
      
      <div className="col l6 s12">
            <h5 className="white-text">Best Chef Food Recipes</h5>
            <p className="grey-text text-lighten-4">
              Learn our best meal recipes and collection.
            </p>
          </div>  
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
          © 2022 Best Chef Food Recipes
          <Link className="grey-text text-lighten-4 right"
            
            to={{ pathname: "https://github.com/sanamcha/best-chef-traning-react-app" }}
            target="_blank"
          >
            Github Repo
          </Link>
         </div> 
      </div>
      
    </footer>
  );
};

export default Footer;