"use strict";

const db = require("../db");
const { NotFoundError} = require("../expressError");
const { sqlForPartialUpdate } = require("../helpers/sql");

class Review {
  
    static async create(data) {
      const result = await db.query(
            `INSERT INTO reviews (
              meal_id,
              username,
              review

             )
             VALUES ($1, $2, $3)
             RETURNING 
             meal_id, 
             username,
             review
             `,
          [
            data.meal_id,
            data.username,
            data.review
             
            ]);
      let review = result.rows[0];
  
      return review;
    }
  
    // Find all reviews 
     
    
    static async findAll() {
    
      const reviewRes = await db.query(
            ` SELECT 
                r.id, 
                r.username,   
                r.review,
                r.meal_id,
                m.id
                
              FROM reviews AS r
              LEFT JOIN meals AS m
              ON m.id = r.meal_id;
              `);
  
      return reviewRes.rows;
    }
  
    // Given a review id, return data about review.
    static async get(id) {
      const reviewResult = await db.query(
            `SELECT   
                meal_id,
                username,
                review
                 
              FROM reviews
              WHERE meal_id = $1`, [id]);
  
      const reviewId = reviewResult.rows[0];
  
      if (!reviewId) throw new NotFoundError(`No Reviews found : ${reviewId}`);

      return reviewId;
    }
  
  
    // Update review data with `data`.
    
  
    static async update(id, data) {
      const { setCols, values } = sqlForPartialUpdate(
          data,
          {});
      const idVarIdx = "$" + (values.length + 1);
  
      const querySql = `UPDATE reviews
                        SET ${setCols} 
                        WHERE id = ${idVarIdx} 
                        RETURNING 
                        id,
                        review,
                        username,
                        `;
      const result = await db.query(querySql, [...values, id]);
      const review = result.rows[0];
  
      if (!review) throw new NotFoundError(`No review: ${id}`);
  
      return review;
    }
  
    // Delete given review from database; returns undefined.
    
  
    static async remove(id) {
      const result = await db.query(
            `DELETE
             FROM review
             WHERE id = $1
             RETURNING id`, [id]);
      const review = result.rows[0];
  
      if (!review) throw new NotFoundError(`No review: ${id}`);
    }
  }
  
  module.exports = Review;