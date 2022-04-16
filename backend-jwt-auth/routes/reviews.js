"use strict";

/** Routes for reviews. */

const jsonschema = require("jsonschema");

const express = require("express");
const { BadRequestError } = require("../expressError");
const { ensureAdmin } = require("../middleware/auth");
const Review = require("../models/review");
// const reviewsNewSchema = require("../schemas/reviewNew.json");
// const reviewUpdateSchema = require("../schemas/reviewUpdate.json");
// const reviewSearchSchema = require("../schemas/reviewSearch.json");

const router = express.Router({ mergeParams: true });


// POST / { review } => { review }

router.post("/", async function (req, res, next) {
//   try {
//     const validator = jsonschema.validate(req.body, reviewNewSchema);
//     if (!validator.valid) {
//       const errs = validator.errors.map(e => e.stack);
//       throw new BadRequestError(errs);
//     }

    const review = await Review.create(req.body);
    return res.status(201).json({ review });
//   } catch (err) {
//     return next(err);
//   }
});

// GET / => allreviews
   

router.get("/", async function (req, res, next) {
  const q = req.query;

//   try {
//     const validator = jsonschema.validate(q, reviewSearchSchema);
//     if (!validator.valid) {
//       const errs = validator.errors.map(e => e.stack);
//       throw new BadRequestError(errs);
//     }

    const reviews = await Review.findAll(q);
    return res.json({ reviews });
//   } catch (err) {
//     return next(err);
//   }
});

// GET /[reviewId] => { review }


router.get("/:id", async function (req, res, next) {
  try {
    const reviewId = await Review.get(req.params.id);
    return res.json({ reviewId });
  } catch (err) {
    return next(err);
  }
});


// PATCH /[reviewId]  => { review }

router.patch("/:id", ensureAdmin, async function (req, res, next) {
//   try {
//     const validator = jsonschema.validate(req.body, reviewUpdateSchema);
//     if (!validator.valid) {
//       const errs = validator.errors.map(e => e.stack);
//       throw new BadRequestError(errs);
//     }

    const review = await Review.update(req.params.id, req.body);
    return res.json({ review });
//   } catch (err) {
//     return next(err);
//   }
});

// DELETE /  =>  { deleted: id }


router.delete("/:id", ensureAdmin, async function (req, res, next) {
  try {
    await Review.remove(req.params.id);
    return res.json({ deleted: +req.params.id });
  } catch (err) {
    return next(err);
  }
});


module.exports = router;
