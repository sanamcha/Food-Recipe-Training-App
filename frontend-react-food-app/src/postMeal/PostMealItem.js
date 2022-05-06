// import React, {useState, useEffect, useContext }from "react";
// import { useParams} from "react-router-dom";
// import { Card, CardBody, CardTitle, CardText, ListGroup} from "reactstrap";
// import ReactPlayer from "react-player/youtube";
// import RequestApi from "../api/RequestApi";
// // import ViewReviewId from "./ReviewDetails";
// import ReviewCardList from "./ReviewCardList";


// // import LikePost from "./LikePost";
// import LikeMeal from "./LikeMeal";

// const PostMealItem = () => {
//     console.debug("PostItem");
//     const [mealId, setMealId] = useState({});
//     let { id } = useParams();
    
//     useEffect(() => {
//           async function getAllMealId() {
//             console.debug("getAllMealId=", getAllMealId)

//             const mealId = await RequestApi.getMealById(id);
//               setMealId(mealId.meals);

//           }
//           getAllMealId();
         
//         }, [id]);

// if(!mealId) return <h2>Loading......</h2>
//     return (
//         <div className="PostMealItem col-md-8">
 
//         <div>
//         <section>
//             <Card>
//                 <CardBody>
                  
//                         <CardTitle className="font-weight-bold text-center">
//                     {mealId.meal}
//                 </CardTitle>
//                 <CardText className="font-italic">
//                 <b>Category :</b>{mealId.category}
//                 </CardText>
//                 <CardText className="font-italic">
//                 <b>Area :</b>{mealId.area}
//                 </CardText>
                
//                 <img src ={mealId.image} 
//                        alt ="meal images"/>
//                  <LikeMeal />
//                 <p>
//                     <b>Instructions :</b>{mealId.instructions}
//                 </p>

//                 {/* <LikePost m={m} />  */}
               
               
//                  <div className="row center-align">
//                    <div className="col s12">
//                        <h4>Demo Video</h4>
//                        <div className="player-wrapper">
//                        <ReactPlayer 
//                            className = "react-player"
//                            url = { mealId.youtube }
//                            width="100%"
//                            height="400px"
//                            pip={true}
//                            stopOnUnmount={false}
//                        />
//                        </div>
//                    </div>
//                </div>
//                 </CardBody>
//             </Card>
//         </section>

//         <section className="align-center">
//             <Card>
//                 <CardBody>
                   
//                      <ListGroup>
//                          <p>Reviews:</p>
//                         <ul>
//                          {/* <ReviewCardList reviews={mealId.reviews}/>  */}
                
//                          </ul> 

//                      </ListGroup> 
//                 </CardBody>
//             </Card>
         
//          </section>
//         </div>
//         </div>
//     );
// }

// export default PostMealItem;