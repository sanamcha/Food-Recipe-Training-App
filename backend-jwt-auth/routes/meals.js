"use strict";

/** Routes for meals. */

const jsonschema = require("jsonschema");

const express = require("express");
const { BadRequestError } = require("../expressError");
const { ensureAdmin, ensureLoggedIn, ensureCorrectUserOrAdmin } = require("../middleware/auth");
const Meal = require("../models/meal");
const Review = require("../models/review")
const mealNewSchema = require("../schemas/mealNew.json");
const mealUpdateSchema = require("../schemas/mealUpdate.json");
const mealSearchSchema = require("../schemas/mealSearch.json");

const router = express.Router({ mergeParams: true });


// POST / { meal } => { meal }
 


router.post("/",  async function (req, res, next) {
  try {
    const validator = jsonschema.validate(req.body, mealNewSchema);
    if (!validator.valid) {
      const errs = validator.errors.map(e => e.stack);
      throw new BadRequestError(errs);
    }

    const meal = await Meal.create(req.body);
    return res.status(201).json({ meal });
  } catch (err) {
    return next(err);
  }
});

// GET / => allMeals
   

router.get("/",  async function (req, res, next) {
  const q = req.query;

  try {
    const validator = jsonschema.validate(q, mealSearchSchema);
    if (!validator.valid) {
      const errs = validator.errors.map(e => e.stack);
      throw new BadRequestError(errs);
    }

    const meals = await Meal.findAll(q);
    return res.json({ meals });
  } catch (err) {
    return next(err);
  }
});

// GET /[mealId] => { meal }


router.get("/:id",  async function (req, res, next) {
  try {
    const meals = await Meal.get(req.params.id);
    // const reviews = await Review.get(req.params.id);
   
    return res.json({ meals });


  } catch (err) {
    return next(err);
  }
});

//post reviews on meal id
router.post("/:id/reviews", async function(req, res, next) {
  try {
    const newReview = await Review.create(req.body)
    return res.json({ newReview })
  } catch(err) {
    return next(err);
  }
});

//get meals/:id/reviews
router.get("/:id/reviews", async function (req, res, next) {
  try {
    const review = await Review.get(req.params.id);
    // const meal = await Meal.get(req.params.id);

      // return res.json({ meal });
      return res.json({ review });

  } catch (err) {
    return next(err);
  }
});


//get meals/:id/reviews/:id
// router.get("/:id/reviews/:id", async function (req, res, next) {
//   try {
    // const review = await Review.get(req.params.id);
    // const meal = await Meal.get(req.params.id);

//       return res.json({ review });

//   } catch (err) {
//     return next(err);
//   }
// });

router.get("/:category", async function (req, res, next) {
  try {
    const meal = await Meal.getCat(req.params.category);
    return res.json({ meal });
  } catch (err) {
    return next(err);
  }
});

// PATCH /[mealId]  => { meal }


router.patch("/:id",  async function (req, res, next) {
  try {
    const validator = jsonschema.validate(req.body, mealUpdateSchema);
    if (!validator.valid) {
      const errs = validator.errors.map(e => e.stack);
      throw new BadRequestError(errs);
    }

    const meal = await Meal.update(req.params.id, req.body);
    return res.json({ meal });
  } catch (err) {
    return next(err);
  }
});


//like the post
router.put('/like/:id', async function(req, res, next) {
  try{
    const meal = await Meal.get(req.params.id);

    //to check the meal has already been liked
    if(meal.likes.filter(like => like.user.toString()=== req.user.id).length > 0){
      return res.status(400).json({ msg: "Meals already been liked"});
    }
      meal.likes.unshift({ user: req.user.id });
      await meal.save();
      res.json(meal.likes);
    
  }catch (err){
    return next(err);
  }
});

//to unlike meal post
router.put('/unlike/:id', async function(req, res, next) {
  try{
    const meal = await Meal.get(req.params.id);

    //to check the meal has already been liked
    if(meal.likes.filter(like => like.user.toString()=== req.user.id).length === 0){
      return res.status(400).json({ msg: "Meals has not yet  been liked"});
    }

    //get remove idx
    const removeIdx = meal.likes.map(like => like.user.toString()).indexOf(req.user.id);

      meal.likes.splice(removeIdx, 1);

      await meal.save();
      res.json(meal.likes);
    
  }catch (err){
    return next(err);
  }
})



// DELETE /  =>  { deleted: id }

router.delete("/:id", async function (req, res, next) {
  try {
    await Meal.remove(req.params.id);
    return res.json({ deleted: +req.params.id });
  } catch (err) {
    return next(err);
  }
});


module.exports = router;
