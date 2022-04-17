"use strict";

const db = require("../db");
const { NotFoundError} = require("../expressError");
const { sqlForPartialUpdate } = require("../helpers/sql");


class Meal {
  
  static async create(data) {
    const result = await db.query(
          `INSERT INTO meals (
            
            meal,
            category,
            area,
            instructions,
            image,
            youtube )
           VALUES ($1, $2, $3, $4, $5, $6)
           RETURNING 
           meal, category, area,
           instructions, image, youtube`,
        [
          
          data.meal,
          data.category,
          data.area,
          data.instructions,
          data.image,
          data.youtube ]);
    let meal = result.rows[0];

    return meal;
  }

  // Find all meals 
   
  
  static async findAll() {
  
    const mealsRes = await db.query(
          ` SELECT 
                  id,
                  meal,
                  category,
                  area,
                  instructions,
                  image,
                  youtube
         
            FROM meals
            ORDER BY id`);

    return mealsRes.rows;
  }

  // Given a meal id, return data about meal.
  static async get(category) {
    const mealResult = await db.query(
          `SELECT id,
                  meal,
                  category,
                  area,
                  instructions,
                  image,
                  youtube,
                  username    
            FROM meals
            WHERE category=$1`, 
            [category]);

    const meal = mealResult.rows[0];

    if (!meal) throw new NotFoundError(`No meal: ${category}`);

    return meal;
  }

//get meals by category
  static async get(id) {
    const mealRes = await db.query(
          `SELECT   id,
                    meal,
                    category,
                    area,
                    instructions,
                    image,
                    youtube,
                    username
                    
            FROM meals
            WHERE id = $1`, [id]);

    const mealId = mealRes.rows[0];

    if (!mealId) throw new NotFoundError(`No meal: ${id}`);

    const categoriesRes = await db.query(
          `SELECT 
              id,
              category,
              image,
              description
           FROM categories
           WHERE id = $1`, [mealId.categoryId]);

    delete mealId.categoryId;
    mealId.category = categoriesRes.rows[0];

    return mealId;
  }

  // Update meal data with `data`.
  

  static async update(id, data) {
    const { setCols, values } = sqlForPartialUpdate(
        data,
        {});
    const idVarIdx = "$" + (values.length + 1);

    const querySql = `UPDATE meals 
                      SET ${setCols} 
                      WHERE id = ${idVarIdx} 
                      RETURNING 
                      id,
                      meal,
                      category,
                      area,
                      instructions,
                      image,
                      youtube
                      `;
    const result = await db.query(querySql, [...values, id]);
    const meal = result.rows[0];

    if (!meal) throw new NotFoundError(`No meal: ${id}`);

    return meal;
  }

  // Delete given meal from database; returns undefined.
  

  static async remove(id) {
    const result = await db.query(
          `DELETE
           FROM meals
           WHERE id = $1
           RETURNING id`, [id]);
    const meal = result.rows[0];

    if (!meal) throw new NotFoundError(`No meal: ${id}`);
  }
}

module.exports = Meal;
