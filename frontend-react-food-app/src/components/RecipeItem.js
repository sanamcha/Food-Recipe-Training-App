import React, {useState, useEffect, useContext }from "react";
import { useParams, Link } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import UserContext from "../users/UserContext";
import ReactPlayer from "react-player/youtube";
import likedImg from "./img/thumb-up.png";
import likeImg from "./img/like.png";
import RequestApi from "../api/RequestApi";

const RecipeItem =({ likeId }) => {

    const [recipes, setRecipes] = useState([]);

    const { hasLiked, like } = useContext(UserContext);
    const [liked, setLiked] = useState([]);
    

    useEffect(function getAllMealId() {
      console.debug("getAllMealId=", getAllMealId)
      result();
    }, []);

    useEffect( function updateLiked(){
        // setLiked(hasLiked(likeId));
       }, [likeId, hasLiked]);
    
       //click on like btn
       async function handleLike(e){
           if(hasLiked(likeId)) return;
        //    like(likeId);
           setLiked(true);
       }

    async function result() {
        let recipes = await RequestApi.getMeals();
        setRecipes(recipes);
}
    const { meal } = useParams();
    let r = recipes.find(i => i.meal === meal);
    if(!r) return <h1> No results found.......</h1>



    return (
        <div>{liked}

        
        <section>
            <Card>
                <CardBody>
                
                    <CardTitle className="font-weight-bold text-center">
                         {r.meal}
                     </CardTitle>
                     <CardText className="font-italic">
                     <b>Category :</b>{r.category}
                     </CardText>
                     <CardText className="font-italic">
                     <b>Area :</b>{r.area}
                     </CardText>
                     
                     <img src ={r.image} />
                     
                     <p>
                         <b>Instructions :</b>{r.instructions}
                     </p>
                     <div>
                    <button
                    className="btn btn-info "
                    onClick={handleLike}
                    disabled={liked} 
                    >
                    {liked ? <img src={likedImg} 
                          alt ="liked thumb" /> 
                          : <img src={likeImg} 
                          alt ="like thumb" />
                        }
                    </button>
                   
                       <Link to={`posts/reviews/add`}><button className="btn btn-success">Add Reviews..</button></Link> 
                    
                    </div>
                     <div className="row center-align">
                        <div className="col s12">
                            <h4>Demo Video</h4>
                            <div className="player-wrapper">
                            <ReactPlayer 
                                className = "react-player"
                                url = { r.youtube }
                                width="100%"
                                height="400px"
                                pip={true}
                                stopOnUnmount={false}
                            />
                            </div>
                        </div>
                    </div>
          
                </CardBody>
               
            </Card>
        </section>
    </div>
    )

}

export default RecipeItem;