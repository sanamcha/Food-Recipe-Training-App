import axios from "axios";
import React , {Fragment, useState } from "react";

const EditMealPost = ({ m }) => {
    const [instructions, setInstructions] = useState([ m.instructions])
    const [meal, setMeal] = useState([m.meal])

    //edit function
    const updateInstructions = async (e) => {
        e.preventDefault();
        try{
            
            const body = {meal, instructions};
            const response = await axios.put(`http://localhost:3002/meals/${m.id}`, {
                method: "PUT",
                headers:{"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });
            console.log(response)
        } catch(err){
            console.log(err.message)
        }
    }
    return (
    <Fragment>
    
<button type="button" class="btn btn-warning" data-toggle="modal" data-target={`#id${m.id}`}>
  Edit
</button>


<div class="modal" id={`id${m.id}`}>
  <div class="modal-dialog">
    <div class="modal-content">

     
      <div class="modal-header">
        <h4 class="modal-title">Edit</h4>
        <button type="button" class="close" data-dismiss="modal" 
                onClick={()=> setInstructions(m.instructions)}
               >&times;</button>
       
      </div>

      <div class="modal-body">
        <input type="text" 
            className="form-control" 
            value={meal} 
            onChange={e => setMeal(e.target.value)} />
      </div>
      <div class="modal-body">
        <input type="text" 
            className="form-control" 
            value={instructions} 
            onChange={e => setInstructions(e.target.value)} />
      </div>

      
      <div class="modal-footer">
        <button type="button"
                class="btn btn-warning"  
                data-dismiss="modal"
                onClick={e => updateInstructions(e)}>Edit</button>
      </div>

    </div>
  </div>
</div>
    </Fragment>
    );
};

export default EditMealPost;