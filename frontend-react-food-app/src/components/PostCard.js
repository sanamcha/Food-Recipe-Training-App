// import React, {useState, useEffect, useContext }from "react";
// import { useParams, Link, useHistory} from "react-router-dom";
// import { Card, CardBody, CardTitle, CardText, ListGroup, ListGroupItem } from "reactstrap";
// import UserContext from "../users/UserContext";
// import ReactPlayer from "react-player/youtube";
// import likedImg from "./img/thumb-up.png";
// import likeImg from "./img/like.png";
// import RequestApi from "../api/RequestApi";
// import ViewReviewId from "./ViewReviewId";


// const PostCard = ({  id, meal, category, area,image, youtube, review }) => {
//     console.debug("PostCard");

//     const { hasLikedToMeal, likeToMeal } = useContext(UserContext);
//     const [liked, setLiked] = useState();

//     useEffect( function updateLikedStatus(){
//         console.debug("updateLikedStatus", "id=", id)
//         // setLiked(hasLikedToMeal(id));
//        }, [id, hasLikedToMeal]);
    
//        //click on like btn
//        async function handleLike(e){
//            if(hasLikedToMeal(id)) return;
//            likeToMeal(id);
//            setLiked(true);
//        }
    

//     return (
//         <div>
//             {liked}
//         <div> 
//             <Link to={`meals/${id}`} >{meal}</Link>
//             {/* <p>{meal}</p> */}
//             <p>{category}</p>
//             <p>{area}</p>
//             <img src={image} />
//                <button
//                className="btn btn-info "
//                onClick={handleLike}
//                disabled={liked} 
//                >
//                {liked ? <img src={likedImg} 
//                      alt ="liked thumb" /> 
//                      : <img src={likeImg} 
//                      alt ="like thumb" />
//                    }
//                </button>
//  </div>
//  </div>
//     )
// }

// export default PostCard;