import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { ListGroupItem } from "reactstrap";
import axios from "axios";
import EditPost from "./EditPost";
// import LikePost from "./LikePost";


//show list of meals from api
function PostList({  meals, setMeals }) {
  const { id } = useParams()

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
    
    <div>
   
      {meals.map(m =>(
      <div>
        <Link to={`/meals/${m.id}`} key={m.id} >
         <ListGroupItem>
         
           {m.meal}   <br></br>  
           <img src={m.image} alt="meal image"/>             
         </ListGroupItem>
     
        </Link>
     
        {/* <Link to={`/reviews`} key={m.id}>View Reviews</Link> */}


        {/* <LikePost m={m} /> */}
        <Link to={`meals/${m.id}/add`} key={m.id}><button className="btn btn-info">Add Reviews</button>  </Link> 
        
        
        <EditPost m={m} key={m.id}/>

        <button className="btn btn-danger"
                onClick={() => deleteBtn(m.id)}>Delete</button>


      </div>
    ))}
    
 </div>
 );
}

export default PostList;