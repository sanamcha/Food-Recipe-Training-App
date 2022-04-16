"use strict";

const db = require("../db");
const { BadRequestError, NotFoundError } = require("../expressError");
const { sqlForPartialUpdate } = require("../helpers/sql");
 
class Category {
  // Create a category (from data), update db, return new category data.

  static async create({ id, category, image, description }) {
    const duplicateCheck = await db.query(
          `SELECT id
           FROM categories
           WHERE id = $1`,
        [id]);

    if (duplicateCheck.rows[0])
      throw new BadRequestError(`Duplicate company: ${id}`);

    const result = await db.query(
          `INSERT INTO categories
           (id, category, image, description)
           VALUES ($1, $2, $3, $4)
           RETURNING id, category, image, description`,
        [id, category, image, description],
    );
    return result.rows[0];

  }

  // Find all categories
  
  static async findAll(searchFilters = {}) {
    let query = `SELECT 
                    id,
                    category, 
                    image,
                    description 
                 FROM categories`;
    let whereExpressions = [];
    let queryValues = [];

    const { id, category } = searchFilters;


    if (category) {
      queryValues.push(`%${category}%`);
      whereExpressions.push(`category ILIKE $${queryValues.length}`);
    }

    if (whereExpressions.length > 0) {
      query += " WHERE " + whereExpressions.join(" AND ");
    }

    // Finalize query and return results

    query += " ORDER BY category";
    const categoriesRes = await db.query(query, queryValues);
    return categoriesRes.rows;
  }

  // Given a categories name, return data about meal.
  

  static async get(id) {
    const categoryRes = await db.query(
          `SELECT id, 
                category, 
                image, 
                description 
           FROM categories
           WHERE id = $1`,
        [id]);

    const category = categoryRes.rows[0];

    if (!category) throw new NotFoundError(`No found: ${id}`);

    // const mealsRes = await db.query(
    //       `SELECT 
    //             id ,
    //             meal,
    //             category,
    //             area,
    //             instructions,
    //             image 
    //             youtube
    //        FROM meals
    //        WHERE category_id = $1
    //        ORDER BY id`,
    //     [id],
    // );

    // category.meals = mealsRes.rows;

    return category;
  }

  // Update categories data with `data`.
   

  static async update(id, data) {
    const { setCols, values } = sqlForPartialUpdate(
        data,
        {
            image: "image",
            description: "description",
        });
    const VarIdx = "$" + (values.length + 1);

    const querySql = `UPDATE categories 
                      SET ${setCols} 
                      WHERE id = ${VarIdx} 
                      RETURNING id,
                      category,
                      image,
                      description`;
    const result = await db.query(querySql, [...values, id]);
    const category = result.rows[0];

    if (!category) throw new NotFoundError(`No category: ${id}`);

    return category;
  }

  // Delete given category from database
  

  static async remove(id) {
    const result = await db.query(
          `DELETE
           FROM categories
           WHERE handle = $1
           RETURNING id`,
        [id]);
    const category = result.rows[0];

    if (!category) throw new NotFoundError(`No category: ${id}`);
  }
}


module.exports = Category;
