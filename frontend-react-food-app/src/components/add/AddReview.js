import React from 'react';
import { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';


const AddReview = ({ addReviews }) => {
    const history = useHistory();
    const {id} = useParams();
    const [formData, setFormData] = useState({  
        review:"", 
        username:"",
        meal_id: ""
   
    });

    const [formErrors, setFormErrors] = useState([]);
    console.debug("formError=", formErrors);
    //handle form submit

    async function handleSubmit(e){
        e.preventDefault();
        let result = await addReviews(formData);
        if (result.success){
            history.push("/meals");
            // history.push(`{/meals/${id}}`);
        } else {
            setFormErrors(result.errors);
        }
    }

    //for handle-change
    function handleChange(e){
        const { name, value } = e.target;
        setFormData(form => ({ ...form, [name]: value}));
    }
    return (
        <div className="AddReview">
          <div className="container col-md-6">
            <h3 >Add Review:</h3>
  
            <div className="card">
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  
                  <div className="form-group">
                    <label>Review :</label>
                    <input
                        
                        name="review"
                        className="form-control"
                        value={formData.review}
                        onChange={handleChange}
                        autoComplete="review"
                        required
                    />
                  </div>

                  <div className="form-group">
                    <label>Username :</label>
                    <input
                        
                        name="username"
                        className="form-control"
                        value={formData.username}
                        onChange={handleChange}
                        autoComplete="username"
                        required
                    />
                  </div>
                  

                  <div className="form-group">
                    <label>Meal Id :</label>
                    <input
                        
                        name="meal_id"
                        className="form-control"
                        value={formData.meal_id}
                        onChange={handleChange}
                        autoComplete="meal_id"
                        required
                    />
                  </div>


                  <button
                      className="btn btn-primary"
                      onSubmit={handleSubmit}
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
    );

}


export default AddReview;