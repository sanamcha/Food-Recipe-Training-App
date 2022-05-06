import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { ListGroupItem } from "reactstrap";
import axios from "axios";
import EditMealPost from "./EditMealPost";
import RequestApi from "../api/RequestApi";

import PostMealCard from "./PostMealCard";


//show list of meals from api
function PostMealList() {
  const { id } = useParams()
  const [meals, setMeals] = useState([]);


  useEffect(() => {
     function getMealOnLoad() {
      console.debug("getMealOnLoad=",getMealOnLoad)
      mealRes();
    }
    getMealOnLoad();
  }, []);

  async function mealRes(id) {
    let meals = await RequestApi.getMeals(id);
    setMeals(meals);
  }


  if (!meals) return <h1>Loading....</h1>


const deleteBtn = async (id) => {
  try{
    const deleteBtn = await axios.delete(`http://localhost:3002/meals/${id}`, {
      method:"DELETE"
    });
    setMeals(meals.filter(m => m.id !== id))
    console.log(deleteBtn)
    
  }catch(err){
    console.log(err.message)
  }
}

    return (
    
    <div className="PostMealList">
      <div className="container">
      <div clasName="row">
      <div className="col-sm-8 offset-sm-2 ">
           
          {meals.length ? (
              <div className="PostMealList-list">
              {meals.map(m => (
                <div>
                <PostMealCard 
                      key={m.id}
                      id={m.id}
                      meal={m.meal}
                      category={m.category}
                      area={m.area}
                      instructions={m.instructions}
                      image={m.image}
                      youtube={m.youtube} />

              
                  <Link to={`meals/${m.id}/add`} key={m.id}>
                    <button className="btn btn-info">Add Reviews</button> 
                  </Link>  

                  <EditMealPost m={m} key={m.id}/>

                  <button className="btn btn-danger"
                          onClick={() => deleteBtn(m.id)}>Delete</button>
                </div>
                  
              ))}
               </div>
          ) : (
          <p>No, resuts found..</p>
          )}
    
        </div>

   
      {/* {meals.map(m =>(
      <div>
        <Link to={`/meals/${m.id}`} key={m.id} >
         <ListGroupItem>
         
           {m.meal}   <br></br>  
           <img src={m.image} alt="meal image"/>             
         </ListGroupItem>
     
        </Link>
     
        {/* <Link to={`/reviews`} key={m.id}>View Reviews</Link> */}


        {/* <LikePost m={m} />
        <Link to={`meals/${m.id}/add`} key={m.id}><button className="btn btn-info">Add Reviews</button>  </Link>  */}
        
        
        {/* <EditMealPost m={m} key={m.id}/>

        <button className="btn btn-danger"
                onClick={() => deleteBtn(m.id)}>Delete</button> */}

          </div>
       </div>
     {/* ))}   */}
    
 </div>
 );
} 

export default PostMealList;