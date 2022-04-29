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
            LEFT JOIN 
            (SELECT meal_id, COUNT(*) FROM reviews GROUP BY meal_id) 
            reviews 
            ON meals.id = reviews.meal_id
            `);

    return mealsRes.rows;
  }

  // Given a meal id, return data about meal.
  // static async getCat(category) {
  //   const mealResult = await db.query(
  //         `SELECT id,
  //                 meal,
  //                 category,
  //                 area,
  //                 instructions,
  //                 image,
  //                 youtube,
  //                 username    
  //           FROM meals
  //           WHERE category=$1`, 
  //           [category]);

  //   const meal = mealResult.rows[0];

  //   if (!meal) throw new NotFoundError(`No meal: ${category}`);

  //   const reviewRes = await db.query(
  //       `SELECT id, review, username, meal_id 
  //       FROM reviews
  //       WHERE meal_id = $1
  //       ORDER BY id,
  //       `[category],
  //   );
  //   meal.reviews =reviewRes.rows;

  //   return meal;
  // }

//get meals by category
  static async get(id) {
    const mealRes = await db.query(
          `SELECT   
              id,
              meal,
              category,
              area,
              instructions,
              image,
              youtube,
              reviews,
              likes
        
            FROM meals 
    
            WHERE id = $1`, [id]);

    const mealId = mealRes.rows[0];

    if (!mealId) throw new NotFoundError(`No meal: ${id}`);

    const reviewsRes = await db.query(
      `SELECT 
          id,
          review,
          username,
          meal_id 
          
       FROM reviews 
      WHERE meal_id = $1
      ORDER BY id`,
      [id]);
     
      mealId.reviews = reviewsRes.rows;

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
