import React from "react";
import ReviewDetails from "./ReviewDetails";

function ReviewCardList ({ reviews }) {
    console.debug("ReviewCardList", "reviews=", reviews);


    return (
        <div className="ReviewCardList">
            { reviews.map(review => (
                <ReviewDetails 
                    key={review.id}
                    meal_id={review.meal_id}
                    review={review.review}
                    username={review.username} />
            ))}

        </div>
    );
}

export default ReviewCardList;