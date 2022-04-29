import React, {useState, useEffect, useContext }from "react";
import { useParams, Link, useHistory} from "react-router-dom";
import { Card, CardBody, CardTitle, CardText, ListGroup, ListGroupItem } from "reactstrap";
import UserContext from "../users/UserContext";
import ReactPlayer from "react-player/youtube";
import likedImg from "./img/thumb-up.png";
import likeImg from "./img/like.png";
import RequestApi from "../api/RequestApi";
import ViewReviewId from "./ViewReviewId";
import ViewReviews from "./ViewReviews";
import { Axios } from "axios";


const PostItem = ({ meals, reviews }) => {
    console.debug("PostItem");

    const [mealId, setMealId] = useState({});

    let { id } = useParams();
    const history = useHistory();
    const [formData, setFormData] = useState({  
        review:"", 
        username:"",
        // mealId:`${id}`
        mealId:""
    
    });

    const [formErrors, setFormErrors] = useState([]);
    console.debug("formError=", formErrors);
    //handle form submit

    // let { id } = useParams();

    useEffect(() => {
          async function getAllMealId() {
            console.debug("getAllMealId=", getAllMealId)

            const mealId = await RequestApi.getMealById(id);
              setMealId(mealId.meals);

          }
          getAllMealId();
         
        }, []);
    
        
    //     async function result() {
    //         const mealId = await RequestApi.getMealById(id);
    //         setMealId(mealId.meals[id]);

    // }

    // async function handleSubmit(e){
    //     e.preventDefault();
    //     let result = await review(formData);
    //     if (result.success){
    //         history.push(`/meals`);
    //     } else {
    //         setFormErrors(result.errors);
    //     }
    // }
    
        //for handle-change
    // function handleChange(e){
    //     const { name, value } = e.target;
    //     setFormData(form => ({ ...form, [name]: value}));
    //     }
      

    // const [reviews, setReviews] = useState([]);

    // useEffect(function getReviewsOnLoad() {
    //     console.debug("getReviewsOnLoad=" ,getReviewsOnLoad );
    //     revResult();
    //    }, []);
   
    //    const revResult = async (id) => {
    //        let reviewId = await RequestApi.getReviewsByMealId(id);
    //        setReviews(reviewId);
    //    }

       if(!reviews) return <h1>Loading.....</h1>;


    return (
        <div>
 
        <div>
        <section>
            <Card>
                <CardBody>
                  
                        <CardTitle className="font-weight-bold text-center">
                    {mealId.meal}
                </CardTitle>
                <CardText className="font-italic">
                <b>Category :</b>{mealId.category}
                </CardText>
                <CardText className="font-italic">
                <b>Area :</b>{mealId.area}
                </CardText>
                
                <img src ={mealId.image} 
                       alt ="meal images"/>
                
                <p>
                    <b>Instructions :</b>{mealId.instructions}
                </p>
                
             
                    
                
               
                 {/* <div className="row center-align">
                   <div className="col s12">
                       <h4>Demo Video</h4>
                       <div className="player-wrapper">
                       <ReactPlayer 
                           className = "react-player"
                           url = { mealId.youtube }
                           width="100%"
                           height="400px"
                           pip={true}
                           stopOnUnmount={false}
                       />
                       </div>
                   </div>
               </div> */}
                </CardBody>
            </Card>
        </section>

        <section className="align-center">
            <Card>
                <CardBody>
                   
                    {/* <ListGroup>
                        <ul>Reviews:
                            <li>{mealId.reviews}</li>
                            <li><ViewReviewId reviews={reviews}/></li> */}
                            {/* <li><ViewReviews /></li> */}
                        {/* </ul> */}
                       
                      
                    {/* </ListGroup> */}
                </CardBody>
            </Card>
         
    </section>
 </div>
 </div>
    )
}

export default PostItem;