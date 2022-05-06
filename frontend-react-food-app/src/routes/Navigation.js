
import React, { useContext, useState, useEffect } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import UserContext from "../users/UserContext";
import M from "materialize-css";
import homeIcon from "../components/img/home.png"



//Nav bar site which shows up on every page.

function Navigation({ logout }) {
    const { currentUser } = useContext(UserContext);

    const [search, setSearch] = useState("");
    let history = useHistory();
  
    const SearchPage = () => {
      history.push(`/search/q=${search}`);
    };
  
    useEffect(() => {
      M.AutoInit();
    }, []);

    function logInNav() {

      return (
        <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
          <div class="container-fluid">
   
          <button class="navbar-toggler" type="button" data-bs-target="#mynavbar">
     
          </button>
            <div class="collapse navbar-collapse" id="mynavbar">
              <ul class="navbar-nav me-auto">
                
                <li class="nav-item mr-4">
                <NavLink className="nav-link" to="/meals">Post Meals</NavLink>
                </li>
                
                <li class="nav-item mr-4">
                <NavLink className="nav-link" to="/meals/add">Add Meals</NavLink>
                </li>
                
                <li class="nav-item mr-4">
                <NavLink className="nav-link" to="/ingredients/0">Ingredients</NavLink>
                </li>
                <li className="nav-item mr-4">
                <NavLink className="nav-link" to="/categories">Categories</NavLink></li>
              </ul>
      
                <li className="nav-item">
                <Link className="nav-link" to="/" onClick={logout}>
                  Log out {currentUser.first_name || currentUser.username}
                </Link>
                </li> 
            </div>
          </div>
      </nav> 
        );
    }


    function logOutNav(){
        return (
          <div class="collapse navbar-collapse" id="mynavbar">
            <ul className="navbar-nav ml-auto">
            <li className="nav-item mr-4">
            <NavLink className="nav-link" to="/login">
                Login
            </NavLink>
            </li>
            <li className="nav-item mr-4">
            <NavLink className="nav-link" to="/guestlogin">
            Guest-Login
            </NavLink>
            </li>
            <li className="nav-item mr-4">
            <NavLink className="nav-link" to="/signup">
                Sign Up
            </NavLink>
            </li>
        </ul>
          </div>
            
        );
    }

    return (
     
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container-fluid">
        <NavLink className="navbar-brand" to="/home" > 
        <img class="homeIcon" src = {homeIcon} alt="home icon" />
        </NavLink>

        <NavLink className="navbar-brand" to="/random" > 
        FOOD-RECIPE
        </NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
          <span className="navbar-toggler-icon"></span>
        </button>
        <form onSubmit={SearchPage} className="d-flex">
              <input
                className="mobile-input input-field"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                placeholder="Search for a Meal..."
                style={{ paddingLeft: 30 }}
            />
        <button className="btn btn-success"type="submit" >Go!</button>
        </form>
    
        </div>
            {currentUser ? logInNav() : logOutNav()}
      </nav>
    )
}

export default Navigation;