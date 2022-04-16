import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3002";


//create api get token
class RequestApi {
    static token;
  
    static async request(endpoint, data = {}, method = "get") {
      console.debug("API Call:", endpoint, data, method);
      
      const url = `${BASE_URL}/${endpoint}`;
      const headers = { Authorization: `Bearer ${RequestApi.token}` };
      const params = (method === "get")
          ? data
          : {};
  
      try {
        return (await axios({ url, method, data, params, headers })).data;
      } catch (err) {
        console.error("API Error:", err.response);
        let message = err.response.data.error.message;
        throw Array.isArray(message) ? message : [message];
      }
    }
  
    // Individual API routes
  
  //added here to get current-user by username
  static async getCurrentUser(username){
    let res = await this.request(`users/${username}`);
    return res.user;
  }
  
  
  //to get token for login 
  static async login(data){
    let res = await this.request(`auth/token`, data, "post");
    return res.token;
  }
  
  
  //added for sign up
  static async signup(data){
    let res = await this.request(`auth/register`, data, "post");
    return res.token;
  }
  
  // add/post more meals
  // static async add(data){
  //   let res = await this.request(`meals`, data, "post");
  //   return res.token;
  // }


  static async add(data) {
    let url ="http://localhost:3002"
    let res = await axios.post(`${url}/meals`, {
      id: data.id,
      meal: data.meal,
      category: data.category,
      area: data.area,
      instructions: data.instructions,
      image: data.image,
      youtube: data.youtube
    });
    return res;
  }
  
  //add reviews
   static async review(data){
    let res = await this.request(`reviews`, data, "post");
    return res.token;
  }

  //to get categories
  static async getCategories(category) {
    let res = await this.request("categories", {category});
    return res.categories;
  }
  //get categories by id 
  static async getCategory(id) {
    let res = await this.request(`categories/${id}`);
    return res.id;
  }
  

  //to get list of meals filtered by meal
  static async getMeals(catagory){
    let res = await this.request("meals", { catagory });
  return res.meals;
  }

  //to get meals by id
  static async getMealId(id){
    let res = await this.request("meals", { id });
  return res.meals;
  }



  //click to like btn
  static async likeId(username, id) {
    await this.request(`users/${username}/meals/${id}`, {}, "post");
  }
  

  }

  export default RequestApi;