# Capstone-Project-2-Proposal

Sanam Maharjan:
Capstone Project-2 Proposal:

The Best Food-Recipe Training App:  

Project Ideas:
What tech stack will you use for your final project? 
React, Node (Express.js), Postgress SQL database, JWT Authentication, Bootstrap, etc.

Is the front-end UI or the back-end going to be the focus of your project? 
Yes, using React for front-end with suitable styling and Node express.js for back-end

Will this be a website? A mobile app?
Both website and mobile app.

What goal will your project be designed to achieve?
Users can check the best available meal and food recipe with ingredients and can watch demo videos about cooking steps.

What data do you plan on using?
Using API:- https://themealdb.com/  

What will the user flow look like?

        App-
          -NavBar
          -LoginForm
          -SignupForm
          -Homepage
          -Search
          -Categories
          -MeaId
            -Meals
              -MealDetails
          -IngredientId
            -Ingredients
              -IngredientDetail

What functionality will your app include?
Users can check most of the best meals, its recipes, different categories and its ingredients.
Can watch demo videos on how to mix the required recipes and cook the meal.
Users can sign up, login to post, add reviews and comments on food description and recipes.

What kind of users will visit your app?
All the users who love the taste of different kinds of food can visit.

      9 . What does your database schema look like?
      
![foodRecipe](https://user-images.githubusercontent.com/64443718/163654911-44ca3565-54da-4055-bc3a-2f2b4563ff3d.png)






### Cloning the app
    $ git clone https://github.com/sanamcha/Food-Recipe-Training-App
    $ cd backend-jwt-auth
    $ npm install
    $ npm start
It will start the backend server in the port- http://localhost:3002 we have to open postgress database in order to run the server.

Now in the folder frontend-react-food-app

    $ cd frontend-react-food-app
    $ npm install
    $ npm start
It will start the client base server in port http:localhost:3000 and enjoy the app.

## Deploy in Heroku
Open the backend-jwt-auth folder and running the following commands....

    $ heroku login
    $ heroku create NAME_OF_APP
    $ echo "web: node server.js" > Procfile
    $ heroku git:remote -a NAME_OF_APP
    $ git add .
    $ git commit -m "ready to deploy backend"
These commands will create a web application and the Procfile which tells Heroku what command to run to start the server.

Now that you have a remote named, run the following commands in the backend-jwt-auth folder. We’re going to push our code to Heroku and copy our local database to the production one.


    $ git push heroku master
    $ heroku addons:create heroku-postgresql:hobby-dev -a NAME_OF_APP
    $ heroku pg:push meals_app DATABASE_URL -a NAME_OF_APP
    $ heroku config:set PGSSLMODE=no-verify
    $ heroku open
    
If you are getting any errors, make sure you run heroku logs -t -a NAME_OF_APP

### frontend-react-food-app
Now let’s deploy the frontend! To do that, we’re going to be using a tool called Surge, which is a very easy way to deploy static websites!

Make sure that you have the surge command installed. You can run this command anywhere in the Terminal:

    $ npm install --global surge
In your RequestApi.js and anywhere else you make requests to localhost:3001 make sure you have the following:

    const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3002";
Next, let’s make sure we define the environment variable for our frontend app. YOUR_HEROKU_BACKEND_URL should be something like https://YOUR_BACKEND_APP_NAME.herokuapp.com.

Make sure you are running the following commands in the frontend-react-food-app folder

    $ REACT_APP_BASE_URL=YOUR_HEROKU_BACKEND_URL npm run build
    $ cp build/index.html build/200.html
    $ surge build

### Endpoints

    -GET '/'
    -GET '/login'
    -GET '/logout'
    -GET '/signup'
    -GET '/home'
    -GET '/random'
    -GET '/search'
    -GET '/categories'
    -GET '/meals'
    -GET '/meal/:id'
    -GET '/meals/id'
    -GET '/ingredients/:id'
    -POST '/meals/add'
    -GET '/reviews/:id'
    -POST '/reviews/add'
