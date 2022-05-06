import React, {useState, useEffect}from "react";
// import { CardBody } from "reactstrap";
// import { useParams, useHistory } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText} from "reactstrap";
// import RequestApi from "../api/RequestApi";


function ReviewDetails ({ meal_id, review, username }) {
    //  const [reviewId, setReviewId] = useState({});
    //  let { id } = useParams();

    // useEffect(() => {
    //     async function getReviewsOnLoad() {
    //     console.debug("getReviewsOnLoad=" ,getReviewsOnLoad )

    //     let reviewId = await RequestApi.getReviewsByMealId(id);
    //        setReviewId(reviewId.reviews);
    //     }
    //     getReviewsOnLoad();
    //    }, []);
   
 
    // if(!reviewId) return <h1>Loading.....</h1>;


    return (
        <div className="ReviewDetails">
           {/* <div> */}
            {/* <p>{meal_id}</p> */}
            {/* <p><b>Reviews :</b> </p>
                <p>{review}</p>
            <p>--<b>{username}</b></p>
            <hr></hr>
           </div> */}
            
            <section>
            <Card>
                <CardBody>
               
                    <div>
                    <CardText className="font-italic">
                    <b>Review :</b>
                    <p>-{review}</p>
                    <em><b>--{username}</b></em>
                    </CardText>
                    
                    </div>

                         

                </CardBody>
            </Card>
        </section>

        </div>
    )
}

export default ReviewDetails;