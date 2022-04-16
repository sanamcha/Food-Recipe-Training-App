"use strict";

/** Routes for meals. */

const jsonschema = require("jsonschema");

const express = require("express");
const { BadRequestError } = require("../expressError");
const { ensureAdmin } = require("../middleware/auth");
const Meal = require("../models/meal");
const mealNewSchema = require("../schemas/mealNew.json");
const mealUpdateSchema = require("../schemas/mealUpdate.json");
const mealSearchSchema = require("../schemas/mealSearch.json");

const router = express.Router({ mergeParams: true });


// POST / { meal } => { meal }
 


router.post("/", async function (req, res, next) {
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
   

router.get("/", async function (req, res, next) {
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


router.get("/:id", async function (req, res, next) {
  try {
    const mealId = await Meal.get(req.params.id);
    return res.json({ mealId });
  } catch (err) {
    return next(err);
  }
});

router.get("/:category", async function (req, res, next) {
  try {
    const meal = await Meal.get(req.params.category);
    return res.json({ meal });
  } catch (err) {
    return next(err);
  }
});

// PATCH /[mealId]  => { meal }


router.patch("/:id", ensureAdmin, async function (req, res, next) {
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

// DELETE /  =>  { deleted: id }


router.delete("/:id", ensureAdmin, async function (req, res, next) {
  try {
    await Meal.remove(req.params.id);
    return res.json({ deleted: +req.params.id });
  } catch (err) {
    return next(err);
  }
});


module.exports = router;
