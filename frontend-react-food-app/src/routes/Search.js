import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Meals from "../components/Meals";
import { getSearchByName } from "../api/MealdbApi";

const Search = () => {
  const [meals, setMeals] = useState([]);
  const [isEmpty, setIsEmpty] = useState([true]);
  let { searchFor } = useParams();

  useEffect(() => {
    searchRes();
   
  }, []);

  const searchRes = async () => {
    const data = await getSearchByName(searchFor);
    if (data) {
      setIsEmpty(false);
      return setMeals(data);
    }
  };

  return (
    <div>
      <div className="container">
        {meals && !isEmpty > 0 ? (

          <h4 className="brown-text text-darken-2">
            <strong>{`We found ${meals.length} meals for "${searchFor}"`}</strong>
          </h4>
        ) : (
          <div>
            <strong>{`We don't have any meals for "${searchFor}"`}</strong>
          </div>
        )}
      </div>
      <div className="row container">
        <Meals meals={meals} />
      </div>
    </div>
  );
};

export default Search;
