import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';



const GuestLoginForm = ({ login }) => {
    const history = useHistory();
    const [formData, setFormData] = useState(
        { 
            username:"guest123", 
            password:"guest123"
        });

    const [formErrors, setFormErrors] = useState([]);
    console.debug("formError=", formErrors);
    //handle form submit

    async function handleSubmit(e){
        e.preventDefault();
        let result = await login(formData);
        if (result.success){
            history.push("/");
        } else {
         
            setFormErrors(result.errors);
        }
    }

    //for handle-change
    // function handleChange(e){
    //     const { name, value } = e.target;
    //     setFormData(form => ({ ...form, [name]: value}));
    // }
    return (
        <div className="LoginForm">
          <div className="container col-md-6">
            <h3 >Click the button below to Login As A Guest</h3>
  
            <div className="card">
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                 

                
  
                  <button
                      className="btn btn-primary"
                      onSubmit={handleSubmit}
                  >
                    Login As Guest
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
    );

}

export default GuestLoginForm;