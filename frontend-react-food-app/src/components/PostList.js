import React, { useState, useEffect, useContext } from "react";
import RequestApi from "../api/RequestApi";
import PostCardList from "./PostCardList";
import { Link, useParams } from "react-router-dom";
import UserContext from "../users/UserContext";
import { ListGroupItem } from "reactstrap";
import likedImg from "./img/thumb-up.png";
import likeImg from "./img/like.png";

// import idgen from "react-materialize/lib/idgen";



//show list of meals from api
function PostList({  meals }) {
  const { id } = useParams()

  // const { hasLikedToMeal, likeToMeal } = useContext(UserContext);
  //   const [liked, setLiked] = useState();

  //   useEffect( async function updateLikedStatus(){
  //       console.debug("updateLikedStatus", "id=", id)
        
  //       // setLiked(hasLikedToMeal(id));
        
  //      }, []);
    
  //      //click on like btn
  //      async function handleLike(e){
  //          if(hasLikedToMeal(id)) return;
  //          likeToMeal(id);
  //          setLiked(true);
  //      }

  if (!meals) return <h1>Loading....</h1>

// return (
//   <div>
//     {meals.length 
//     ? <PostCardList  meals = {meals} />
//     : <p>Sorry, No results were found</p>
//   }
//   </div>
// )

    return (
    
    <div>
      {/* {liked} */}
   
    {meals.map(m =>(
      <div>
        <Link to={`/meals/${m.id}`} key={m.id} >
         <ListGroupItem>
         
           {m.meal}   <br></br>  
           <img src={m.image} alt="meal image"/>             
         </ListGroupItem>
     
        </Link>
     
        {/* <Link to={`/reviews`} key={m.id}>View Reviews</Link> */}

        <Link to={`meals/${m.id}/add`} key={m.id}><button className="btn btn-info">Add Reviews</button>  </Link> 

        {/* <button
               className="btn btn-info "
               onClick={handleLike}
               disabled={liked} 
               >
               {liked ? <img src={likedImg} 
                     alt ="liked thumb" /> 
                     : <img src={likeImg} 
                     alt ="like thumb" />
                   }
               </button> */}
      </div>
    ))}
    
 </div>
 );
}

export default PostList;