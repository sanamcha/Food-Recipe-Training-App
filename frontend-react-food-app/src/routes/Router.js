import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Homepage from "./Homepage";
import RandomMeal from "./RandomMeal";
import LoginForm from "../users/LoginForm";

import SignupForm from "../users/SignupForm";
import Categories from "../components/Categories";
import PrivateRoute from "./PrivateRoute";
// import Footer from "../components/Footer";

import MealId from "./MealId";
import Search from "./Search";
// import IngredientId from "./IngredientId";
import IngredientId from "./IngredientId";
import RecipeList from "../components/RecipeList";
import ReviewApp from "../components/ReviewApp";
import AddRecipeForm from "../components/add/AddRecipeForm";
import AddReview from "../components/add/AddReview";
import RecipeItem from "../components/RecipeItem";


//for login and signup routes
function Router({ login, signup, add, likeId, review }) {

    return (
        <div>
            <Switch>
                <Route exact path="/"><Homepage /></Route>
                <Route exact path="/categories"><Categories /></Route>
                <Route exact path="/random"><RandomMeal /></Route>
                
                <Route path="/search/q=:searchFor"><Search /></Route>
                <Route exact path="/meal/:id"><MealId /></Route>
                <Route exact path="/ingredients/:id"><IngredientId /></Route>


                
                <Route exact path="/posts/"><RecipeList /></Route>

                <Route exact path="/posts/reviews/"><ReviewApp /></Route> 
                <Route exact path="/posts/add"><AddRecipeForm add={add} /></Route>
                
                <Route exact path="/posts/:meal"><RecipeItem likeId={likeId}/></Route>
                

                
                <Route exact path="/posts/reviews/add"><AddReview review={review}/></Route>
        
        
                <Route exact path="/login">
                    <LoginForm login={login} />
                </Route>

                <Route exact path="/signup">
                    <SignupForm signup={signup} />
                </Route>


                <Redirect to="/" />
            </Switch>
        </div>
    );
}

export default Router;