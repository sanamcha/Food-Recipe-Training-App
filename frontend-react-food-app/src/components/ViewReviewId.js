import React, {useState, useEffect}from "react";
import { useParams, useHistory } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText} from "reactstrap";
import RequestApi from "../api/RequestApi";


const ViewReviewId = ({reviews}) => {


    if(!reviews) return <h1>Loading.....</h1>;


    return (
        <div>
            <section>
            <Card>
                <CardBody>
                {reviews.map(r => (
                    <div>
                    <CardText className="font-italic">
                    <b>Review :</b>{r.review}
                    </CardText>
                    <em><b>--{r.username}</b></em>
                    </div>
                            ))} 

                </CardBody>
            </Card>
        </section>

        </div>
    )
}

export default ViewReviewId;