"use strict";

/** Routes for categories. */

const jsonschema = require("jsonschema");
const express = require("express");

const { BadRequestError } = require("../expressError");
const { ensureAdmin } = require("../middleware/auth");
const Category = require("../models/category");

const categoryNewSchema = require("../schemas/categoryNew.json");
const categoryUpdateSchema = require("../schemas/categoryUpdate.json");
const categorySearchSchema = require("../schemas/categorySearch.json");

const router = new express.Router();


// POST / { category } =>  { category }


router.post("/",  async function (req, res, next) {
  try {
    const validator = jsonschema.validate(req.body, categoryNewSchema);
    if (!validator.valid) {
      const errs = validator.errors.map(e => e.stack);
      throw new BadRequestError(errs);
    }

    const category = await Category.create(req.body);
    return res.status(201).json({ category });
  } catch (err) {
    return next(err);
  }
});

// GET /  => { categories: ..... }
 

router.get("/", async function (req, res, next) {
  const q = req.query;

  try {
    const validator = jsonschema.validate(q, categorySearchSchema);
    if (!validator.valid) {
      const errs = validator.errors.map(e => e.stack);
      throw new BadRequestError(errs);
    }

    const categories = await Category.findAll(q);
    return res.json({ categories });
  } catch (err) {
    return next(err);
  }
});

// GET /[id]  =>  { category }


router.get("/:id", async function (req, res, next) {
  try {
    const category = await Category.get(req.params.id);
    return res.json({ category });
  } catch (err) {
    return next(err);
  }
});

// PATCH /[id]  

router.patch("/:id", ensureAdmin, async function (req, res, next) {
  try {
    const validator = jsonschema.validate(req.body, categoryUpdateSchema);
    if (!validator.valid) {
      const errs = validator.errors.map(e => e.stack);
      throw new BadRequestError(errs);
    }

    const category = await Category.update(req.params.id, req.body);
    return res.json({ category });
  } catch (err) {
    return next(err);
  }
});

// DELETE /[id]  =>  { deleted: id }


router.delete("/:id", ensureAdmin, async function (req, res, next) {
  try {
    await Category.remove(req.params.id);
    return res.json({ deleted: req.params.id });
  } catch (err) {
    return next(err);
  }
});


module.exports = router;
