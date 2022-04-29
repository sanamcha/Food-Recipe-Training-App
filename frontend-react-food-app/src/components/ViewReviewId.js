import React, {useState, useEffect}from "react";
import { useParams, useHistory } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText} from "reactstrap";
import RequestApi from "../api/RequestApi";


const ViewReviewId = () => {
     const [reviewId, setReviewId] = useState({});
     let { id } = useParams();

    useEffect(() => {
        async function getReviewsOnLoad() {
        console.debug("getReviewsOnLoad=" ,getReviewsOnLoad )

        let reviewId = await RequestApi.getReviewsByMealId(id);
           setReviewId(reviewId.reviews);
        }
        getReviewsOnLoad();
       }, []);
   
 
    if(!reviewId) return <h1>Loading.....</h1>;


    return (
        <div>
            <section>
            <Card>
                <CardBody>
               
                    <div>
                    <CardText className="font-italic">
                    <b>Review :</b>{reviewId.review}
                    </CardText>
                    <em><b>--{reviewId.username}</b></em>
                    </div>
                         

                </CardBody>
            </Card>
        </section>

        </div>
    )
}

export default ViewReviewId;