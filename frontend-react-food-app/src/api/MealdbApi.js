import KEY from "../secretKey";

const BASE_API = {
    mealDetails : `https://www.themealdb.com/api/json/v1/${KEY}/lookup.php?i=`,
    randomMeal : `https://www.themealdb.com/api/json/v1/${KEY}/random.php`,
    mealCategories : `https://www.themealdb.com/api/json/v1/${KEY}/categories.php`,
    searchByName : `https://www.themealdb.com/api/json/v1/${KEY}/search.php?s=`,
    mealAreas : `https://www.themealdb.com/api/json/v1/${KEY}/list.php?a=list`,
    ingredients : `https://www.themealdb.com/api/json/v1/${KEY}/list.php?i=list`,
    byCategory : `https://www.themealdb.com/api/json/v1/${KEY}/filter.php?c=`,
    byArea : `https://www.themealdb.com/api/json/v1/${KEY}/filter.php?a=`,
    filterByIngredient : `https://www.themealdb.com/api/json/v1/${KEY}/filter.php?i=`,
    filterByCatagory : `https://www.themealdb.com/api/json/v1/${KEY}/filter.php?c=`,
    image : "https://www.themealdb.com/images/ingredients"
}



    const getMealDetails =  async (id) => {
        const result = await fetch(`${BASE_API.mealDetails}${id}`);
        const data = await result.json();
        return data;
      };

    async function getSearchByName(meal) {
        const result = await fetch(`${BASE_API.searchByName}${meal}`);
        const data = await result.json();
        return data.meals;
    }  

    const getMealCategories =  async () => {
        const result = await fetch(BASE_API.mealCategories);
        const data = await result.json();
        return data;
      };

      const getByCategory =  async (category) => {
        const result = await fetch(`${BASE_API.byCategory}${category}`);
        const data = await result.json();
        return data;
      };

    const getRandomMeals = async () => {
        let randMeals = [];
        while(randMeals.length !== 24){
            let result = await fetch(BASE_API.randomMeal);
            let data = await result.json();
            randMeals.push(data.meals[0]);
        }        
        return randMeals;    
    }

    async function getAreas(){
        const result = await fetch(BASE_API.mealAreas);
        const data = result.json();
        return data.meals;
    }

    const getIngredientImage = (ingredient) => {
        const imgResult = `${BASE_API.image}/${ingredient}.png`;
        return imgResult;
    };

    async function getIngredient() {
        const result = await fetch(`${BASE_API.ingredients}`);
        const data = await result.json();
        
        return data.meals;
    }
    async function getFilterByIngredient(ingredientName) {
        const result = await fetch(`${BASE_API.filterByIngredient}${ingredientName}`);
        const data = await result.json();

        return data.meals;
    };

export { 
   
    getMealDetails,
    getSearchByName,
    getMealCategories,
    getRandomMeals,
    getAreas,
    getIngredientImage,
    getIngredient,
    getFilterByIngredient,
    getByCategory
 } 

