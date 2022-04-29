import React, {useState, useEffect} from "react";

import { Route, Switch, BrowserRouter } from "react-router-dom";

import Navigation from "./routes/Navigation";
import Footer from "./components/Footer";
import Router from "./routes/Router";
import './App.css';
import RequestApi from "./api/RequestApi";
import UserContext from "./users/UserContext";
import useLocalStorage from "./hooks/useLocalStorage";
import jwt from "jsonwebtoken";


//storing token in local-storage
export const TOKEN_ID = "mealdata-token";

const App = () => {

  const [infoLoaded, setInfoLoaded] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const [token, setToken] = useLocalStorage(TOKEN_ID);

  const [meals, setMeals] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [likeIds, setLikeIds] = useState(new Set([]));

  console.debug("App", "infoLoaded=", infoLoaded, 
  "currentUser=", currentUser, "token=", token);


  useEffect(function loadUser(){
    async function getCurrentUser(){
      if(token) {
        try{
          let { username } = jwt.decode(token);
          RequestApi.token = token;
          let currentUser = await RequestApi.getCurrentUser(username);
          setCurrentUser(currentUser);
          setLikeIds(new Set(currentUser.likes));
          
        } catch (err) {
          console.error("loadUser: problem loading....", err)
          setCurrentUser(null);
        }  
      }
      setInfoLoaded(true);
    }
    setInfoLoaded(false);
    getCurrentUser();
  }, [token]);

//handle for logout
function logout(){
  setCurrentUser(null);
  setToken(null);
}

//handle signup
async function signup(signupData) {
  try {
    let token = await RequestApi.signup(signupData);
    setToken(token);
    return { success: true };
  } catch (errors) {
    console.error("signup failed", errors);
    return { success: false, errors };
  }
}

//handle for login
async function login(loginData) {
  try {
    let token = await RequestApi.login(loginData);
    setToken(token);
    return { success: true };
  } catch (errors) {
    console.error("login failed", errors);
    return { success: false, errors };
  }
}

useEffect(() => {
  async function getMealData() {
    let meals = await RequestApi.getMeals();
    setMeals(meals);
  }
  getMealData();
}, []);


useEffect(() => {
  async function getReviewById(id){
    let reviews = await RequestApi.getReviews(id);
    setReviews(reviews);
  }
  getReviewById();
}, []);



//handle for add more meals/recipe
async function add(addData) {
  try {
    let token = await RequestApi.add(addData);
    setToken(token);
    return { success: true };
  } catch (errors) {
    console.error("post meal failed", errors);
    return { success: false, errors };
  }
}

//to add review for meals
async function addReviews(addData) {
  try {
    let token = await RequestApi.addReview(addData);
    setToken(token);
    return { success: true };
  } catch (errors) {
    console.error("add review fail", errors);
    return { success: false, errors };
  }
}
//to check meals liked
function hasLiked(id){
  return likeIds.has(id);
}

//like to meal
function likes(id) {
  if(hasLiked(id)) return;
  RequestApi.likeMeal(currentUser.username, id);
  setLikeIds(new Set([...likeIds, id]));
}

if(!infoLoaded) return <h1>Loading.......</h1>
    return (
 
      <BrowserRouter>
        
        <UserContext.Provider
            value={{ currentUser, setCurrentUser, hasLiked, likes }} >
        <div className="App">
        <Navigation logout={logout} />
        <Router login={login} signup={signup} meals={meals} setMeals={setMeals} add={add} reviews={reviews} addReviews={addReviews} />
      </div>

      </UserContext.Provider>
    
      <Footer />
    </BrowserRouter>

  );
}

export default App;
