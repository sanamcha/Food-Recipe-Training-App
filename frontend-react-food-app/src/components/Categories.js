import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import RequestApi from "../api/RequestApi";

 

const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(function getCategoriesOnLoad() {
        console.debug("getCategoriesOnLoad");
        result();
    }, []);

    const result = async () => {
        let categories = await RequestApi.getCategories();
        setCategories(categories);
    }

    
    if(!categories) return <h1>Loading.....</h1>;

    return (

        <div className="Categories">
            {categories.map(c => (
                <div>
                    <Link to = {`/search/q=${c.category}?`}><img src={c.image}
                        alt={c.category} />
                        <p><span>{c.category}</span></p> 
                    </Link>
                    
                   <hr></hr>  
                </div>
            ))}

        </div> );
}

export default Categories;