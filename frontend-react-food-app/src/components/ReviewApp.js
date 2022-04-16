import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import RequestApi from "../api/RequestApi";
import {
    Card,
    CardBody,
    CardTitle,
    CardText,
    ListGroup,
    ListGroupItem
  } from "reactstrap";
 

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(function getReviewsOnLoad() {
        console.debug("getReviewsOnLoad=" ,getReviewsOnLoad );
        result();
    }, []);

    const result = async () => {
        let reviews = await RequestApi.getReviews();
        setReviews(reviews);
    }

    
    if(!reviews) return <h1>Loading.....</h1>;

    return (
    <section className="col-md-4">
        <Card>
        <CardBody>
          <CardTitle>
              Review
          </CardTitle>
          <CardText>
         List of some user's Reviews..
          </CardText>
          <ListGroup>
          {reviews.map(r => (
              <ListGroupItem>
                <p>{r.review}</p> 
                <p>{r.username}</p> 
                <p>{r.mealId}</p>
              </ListGroupItem>
              ))}
          </ListGroup>
        </CardBody>
        </Card>
         
    </section>
     );
}

export default Reviews;