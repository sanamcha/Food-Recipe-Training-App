import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Homepage from "../components/Homepage";
import Home from "./Home";
import RandomMeal from "./RandomMeal";
import LoginForm from "../users/LoginForm";
import GuestLoginForm from "../users/GuestLoginForm";
import SignupForm from "../users/SignupForm";
import Categories from "../components/Categories";
import PrivateRoute from "./PrivateRoute";

import MealId from "./MealId";
import Search from "./Search";
import IngredientId from "./IngredientId";
import PostMealList from "../postMeal/PostMealList";
import ReviewList from "../reviewMeal/ReviewList";
import ReviewDetails from "../reviewMeal/ReviewDetails";
import AddPostForm from "../postMeal/AddPostForm";
import AddReview from "../reviewMeal/AddReview";
import PostMealItem from "../postMeal/PostMealItem";
import PostMealDetail from "../postMeal/PostMealDetail";
import PostMealCard from "../postMeal/PostMealCard";



//for login and signup routes
function Router({ login, signup, meals, setMeals, add, reviews, addReviews }) {

    return (
        <div>
            <Switch>
                <Route exact path="/"><Homepage /></Route>
                <Route exact path="/home"><Home /></Route>
                <Route exact path="/categories"><Categories /></Route>
                <Route exact path="/random"><RandomMeal /></Route>
                
                {/* <Route exact path="/meals"><PostMealList meals={meals}  setMeals={setMeals}/></Route> */}
                <Route exact path="/meals"><PostMealList /></Route>
                <PrivateRoute exact path="/meals/add"><AddPostForm add={add} /></PrivateRoute>
                {/* <PrivateRoute exact path="/meals/:id"><PostMealItem meals={meals} reviews={reviews} /></PrivateRoute>
                 */}
                 <PrivateRoute exact path="/meals/:id"><PostMealDetail  /></PrivateRoute>
                
                
                
           
                <Route path="/search/q=:searchFor"><Search /></Route>
                <Route exact path="/meal/:id"><MealId /></Route>
                <Route exact path="/ingredients/:id"><IngredientId /></Route>

                <Route exact path="/reviews"><ReviewList /></Route> 
                <Route exact path="/reviews/:id"><ReviewDetails reviews={reviews}/></Route> 
       
                <PrivateRoute exact path="/meals/:id/add"><AddReview addReviews={addReviews}/></PrivateRoute>
        
        
                <Route exact path="/login">
                    <LoginForm login={login} />
                </Route>

                <Route exact path="/guestlogin">
                    <GuestLoginForm login={login} />
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