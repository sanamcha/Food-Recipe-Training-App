import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';


const AddPostForm = ({ add }) => {
    const history = useHistory();
    const [formData, setFormData] = useState({  
        meal:"", 
        category:"",
        area:"",
        instructions:"",
        image:"",
        youtube:""
    });

    const [formErrors, setFormErrors] = useState([]);
    console.debug("formError=", formErrors);
    //handle form submit

    async function handleSubmit(e){
        e.preventDefault();
        let result = await add(formData);
        if (result.success){
            history.push("/meals");
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
        <div className="AddRecipeForm">
          <div className="container col-md-6">
            <h3 className="add">Add More Meals/Recipe:</h3>
  
            <div className="card">
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">

                  </div>
                  <div className="form-group">
                    <label>Meal:</label>
                    <input
                        
                        name="meal"
                        className="form-control"
                        value={formData.meal}
                        onChange={handleChange}
                        autoComplete="meal"
                        required
                    />
                  </div>

                  <div className="form-group">
                    <label>Category:</label>
                    <input
                        
                        name="category"
                        className="form-control"
                        value={formData.category}
                        onChange={handleChange}
                        autoComplete="category"
                        required
                    />
                  </div>

                  <div className="form-group">
                    <label>Area:</label>
                    <input
                        
                        name="area"
                        className="form-control"
                        value={formData.area}
                        onChange={handleChange}
                        autoComplete="area"
                        
                    />
                  </div>

                  <div className="form-group">
                    <label>Instructions:</label>
                    <input
                        
                        name="instructions"
                        className="form-control"
                        value={formData.instructions}
                        onChange={handleChange}
                        autoComplete="instructions"
                        
                    />
                  </div>

                  <div className="form-group">
                    <label>Meal Image:</label>
                    <input
                        
                        name="image"
                        className="form-control"
                        value={formData.image}
                        onChange={handleChange}
                        autoComplete="image"
                        
                    />
                  </div>

                  <div className="form-group">
                    <label>Youtube Videos:</label>
                    <input
                        
                        name="youtube"
                        className="form-control"
                        value={formData.youtube}
                        onChange={handleChange}
                        autoComplete="youtube"
                        
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

export default AddPostForm;