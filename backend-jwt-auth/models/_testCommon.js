const bcrypt = require("bcrypt");

const db = require("../db.js");
const { BCRYPT_WORK_FACTOR } = require("../config");

const testReviewIds = [];


async function commonBeforeAll() {
   
    await db.query("DELETE FROM meals");
 
    await db.query("DELETE FROM users");


    await db.query(`
    INSERT INTO meals(meal, category, area, instructions, image, youtube, reviews)

    VALUES 
    ('chicken','chicken','indian', 'fry in oil', 'http://chicken.img', 'http://chicken.video', 'i like this food'),

    ('beef','beef','american', 'do barbeque', 'http://beef.img', 'http://beef.video','best food ever')`);

    const resultsReviews = await db.query(`
    INSERT INTO reviews(
        review, username, meal_id)
    VALUES ('test review1', 'testuser1', 1),
    ('test review2','testuser2', 2)
    RETURNING id`);

    testReviewIds.splice(0,0, ...resultsReviews.rows.map(m=>m.id));

    await db.query(`
        INSERT INTO users(username,
            password,first_name,
            last_name, email)
        VALUES ('testuser1', $1, 'testuser1', 'test1', 'test1@email.com'),
               ('testuser2', $2, 'testuser2', 'test2', 'test2@email.com')
        RETURNING username`,
      [
        await bcrypt.hash("password1", BCRYPT_WORK_FACTOR),
        await bcrypt.hash("password2", BCRYPT_WORK_FACTOR),
      ]);

  await db.query(`
        INSERT INTO likes(username, meal_id)
        VALUES ('testuser1', $1)`,
      [testReviewIds[0]]);
}

async function commonBeforeEach() {
    await db.query("BEGIN");
  }
  
  async function commonAfterEach() {
    await db.query("ROLLBACK");
  }
  
  async function commonAfterAll() {
    await db.end();
  }


  module.exports = {
    commonBeforeAll,
    commonBeforeEach,
    commonAfterEach,
    commonAfterAll,
    testReviewIds,
  };