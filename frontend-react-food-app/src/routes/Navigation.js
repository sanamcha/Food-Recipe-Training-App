
import React, { useContext, useState, useEffect } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import UserContext from "../users/UserContext";
import M from "materialize-css";



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
            <ul className="navbar-nav ml-auto">
                
                {/* <li><NavLink className="navbar-brand" to="/meals" > FOOD-RECIPE
            </NavLink></li> */}
                <li className="nav-item mr-4">
                    <NavLink className="nav-link" to="/meals/add">Add Meals</NavLink></li>
                
                <li className="nav-item mr-4">
                    <NavLink className="nav-link" to="/meals">Popular Meals</NavLink></li>
                    <li className="nav-item mr-4">
                    <NavLink className="nav-link" to="/ingredients/0">Ingredients</NavLink></li>
                    <li className="nav-item mr-4">
                    <NavLink className="nav-link" to="/categories">Categories</NavLink></li>
                {/* <li className="nav-item mr-4">
                <NavLink className="nav-link" to="/profile">Profile</NavLink>
                </li> */}
                <li className="nav-item">
                <Link className="nav-link" to="/" onClick={logout}>
                Log out {currentUser.first_name || currentUser.username}
                </Link>
                </li>  
            </ul>
        );
    }


    function logOutNav(){
        return (
            <ul className="navbar-nav ml-auto">
            <li className="nav-item mr-4">
            <NavLink className="nav-link" to="/login">
                Login
            </NavLink>
            </li>
            <li className="nav-item mr-4">
            <NavLink className="nav-link" to="/signup">
                Sign Up
            </NavLink>
            </li>
        </ul>
        );
    }

    return (
        <nav className="Navigation navbar navbar-expand-md">
            <NavLink className="navbar-brand" to="/random" > FOOD-RECIPE
            </NavLink>
            
            <form onSubmit={SearchPage}>
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

            {/* <Link className="nav-link" to="/random">
              Popular Meal
            </Link>
            <Link className="nav-link" to="/categories">Categories</Link>
            <Link className="nav-link" to="/ingredients/0">Ingredients</Link> */}
            {currentUser ? logInNav() : logOutNav()}
        </nav>
    )
}

export default Navigation;