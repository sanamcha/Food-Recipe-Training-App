import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Homepage from "./Homepage";
import RandomMeal from "./RandomMeal";
import LoginForm from "../users/LoginForm";

import SignupForm from "../users/SignupForm";
import Categories from "../components/Categories";
import PrivateRoute from "./PrivateRoute";


import MealId from "./MealId";
import Search from "./Search";

import IngredientId from "./IngredientId";
import PostList from "../components/PostList";
import ViewReviews from "../components/ViewReviews";
import ViewReviewId from "../components/ViewReviewId";
import AddPostForm from "../components/add/AddPostForm";
import AddReview from "../components/add/AddReview";
import PostItem from "../components/PostItem";


//for login and signup routes
function Router({ login, signup, meals, add, reviews, addReviews }) {

    return (
        <div>
            <Switch>
                <Route exact path="/"><Homepage /></Route>
                <Route exact path="/categories"><Categories /></Route>
                <Route exact path="/random"><RandomMeal /></Route>
                
                <Route exact path="/meals"><PostList meals={meals} /></Route>
                <PrivateRoute exact path="/meals/add"><AddPostForm add={add} /></PrivateRoute>
                <PrivateRoute exact path="/meals/:id"><PostItem meals={meals} reviews={reviews} /></PrivateRoute>
                
                
           
                <Route path="/search/q=:searchFor"><Search /></Route>
                <Route exact path="/meal/:id"><MealId /></Route>
                <Route exact path="/ingredients/:id"><IngredientId /></Route>

                <Route exact path="/reviews"><ViewReviews /></Route> 
                <Route exact path="/reviews/:id"><ViewReviewId reviews={reviews}/></Route> 
       
                <PrivateRoute exact path="/meals/:id/add"><AddReview addReviews={addReviews}/></PrivateRoute>
        
        
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