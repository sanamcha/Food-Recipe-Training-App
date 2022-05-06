import React from "react";
import { Link } from "react-router-dom";
import img from "./sanam.jpg";

const Footer = () => {
  return (
 
    
    <footer className="page-footer">
      <div className="container">
      <div className="row center-align">
      
      <div className="col l6 s12">
        <hr></hr>
            <h5 className="white-text">Best Chef Food Recipes</h5>
            <p className="grey-text text-lighten-4">
              Learn our best meal recipes and collection.
            </p>
          </div>  
        </div>
      </div>

   
      <div >
      <center><h2>Meet the Developer</h2>  
          <img src={img}  />
      
        <div>
          <h4 class="title"><b>Sanam Maharjan</b></h4>
          <h5>Software Engineer</h5>
        
        <p>Hi, thanks for checking my site, I am a software engineer from Union City, Bay area. Please feel free to reach me out via email at mhr.sanam@gmail.com</p>
      </div>
      </center>
      
      </div>

      <center>
        <h6> © 2022 Best Chef Food Recipes</h6>
        <p>Follow me on:</p>
        
      <div className="footer-copyright">
        <div className="container">
         
          <Link className="grey-text text-lighten-4 right" 
            
            to={{ pathname: "https://github.com/sanamcha/best-chef-traning-react-app" }}
            target="_blank"
          >
            {/* <i className="fab fa-linkedin"></i> */}
            Github /
          </Link>

          <Link className="grey-text text-lighten-4 right"
            
            to={{ pathname: "https://twitter.com/san_mhr" }}
            target="_blank"
          >
            {/* <i className="fab fa-twitter"></i> */}
            Twiter / 
          </Link>
          <Link className="grey-text text-lighten-4 right"
            
            to={{ pathname: "mailto:mhr.sanam@gmail.com" }}
            target="_blank"
          >
            {/* <i className="fas fa-envelope-open-text"></i> */}
            Mail 
          </Link>
        
       
         </div> 
         
      </div>
      </center>
      
    </footer>
  );
};

export default Footer;