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
 

const ViewReviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(async function getReviewsOnLoad() {
        console.debug("getReviewsOnLoad=" ,getReviewsOnLoad );
        const reviews = await RequestApi.getReviews();
        setReviews(reviews);
    
    }, []);



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
          {reviews.map(r => (
          <Link to={`/reviews/${r.id}`} key={r.id}>
          <ListGroup>
          
              <ListGroupItem >
                <p>{r.id}</p>
                <p>{r.review}</p> 
                <p>{r.username}</p> 
                <p>{r.mealId}</p>
              </ListGroupItem>
             
          </ListGroup>
          </Link>
           ))}
        </CardBody>
        </Card>
         
    </section>
     );
}

export default ViewReviews;