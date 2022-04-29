"use strict";

/** Routes for reviews. */

const jsonschema = require("jsonschema");

const express = require("express");
const { BadRequestError } = require("../expressError");
const { ensureAdmin, ensureLoggedIn, ensureCorrectUserOrAdmin } = require("../middleware/auth");
const Review = require("../models/review");
const Meal =require("../models/meal");


const router = express.Router({ mergeParams: true });


// POST / { review } => { review }

router.post("/", async function (req, res, next) {

    const review = await Review.create(req.body);
    return res.status(201).json({ review });

});

// GET / => allreviews
   

router.get("/",  async function (req, res, next) {

    const reviews = await Review.findAll();
    return res.json({ reviews });

});

//get new reviews
// router.get("/new", ensureLoggedIn, async function (req, res, next) {

//   const reviews = await Review.get(req.params.id);
//   return res.json({ reviews });

// });



// GET /[reviewId] => { review }

router.get("/:id",  async function (req, res, next) {
  try {
    const reviews = await Review.get(req.params.id);
    return res.json({ reviews });
  } catch (err) {
    return next(err);
  }
});

// router.get("/:review", ensureCorrectUserOrAdmin,async function (req, res, next) {
//   try {
//     const review = await Review.get(req.params.review);
//     return res.json({ review });
//   } catch (err) {
//     return next(err);
//   }
// });


// PATCH /[reviewId]  => { review }

router.patch("/:id", ensureCorrectUserOrAdmin, async function (req, res, next) {

    const review = await Review.update(req.params.id, req.body);
    return res.json({ review });

});

// DELETE /  =>  { deleted: id }


router.delete("/:id", ensureCorrectUserOrAdmin, async function (req, res, next) {
  try {
    await Review.remove(req.params.id);
    return res.json({ deleted: +req.params.id });
  } catch (err) {
    return next(err);
  }
});


module.exports = router;
