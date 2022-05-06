"use strict";

const { NotFoundError } = require("../expressError");
const db = require("../db.js");
const Review = require("./review.js");
const {
  commonBeforeAll,
  commonBeforeEach,
  commonAfterEach,
  commonAfterAll,
  testReviewIds,
} = require("./_testCommon");

beforeAll(commonBeforeAll);
beforeEach(commonBeforeEach);
afterEach(commonAfterEach);
afterAll(commonAfterAll);

// create new review

describe("create", function () {
  let newReview = {
    review: "new review",
    username: "Test",
    meal_id: 3,
    
  };

  test("works", async function () {
    let review = await Review.create(newReview);
    expect(review).toEqual({
      ...newreview,
      id: expect.any(Number),
    });
  });
});

// findAll reviews

describe("findAll", function () {
  test("works: no filter", async function () {
    let reviews = await Review.findAll();
    expect(reviews).toEqual([
     
      {
        id: testReviewIds[0],
        review: "test review1",
        username: "testuser1",
        meal_id: 1,
        
      },
      {
        id: testReviewIds[1],
        review: "test review2",
        username: "testuser2",
        meal_id: 2,
      },
      {
        id: testReviewIds[2],
        review: "new review",
        username: "Test",
        meal_id: 3,
        
      },
    ]);
  });

  

 
// get review by id

describe("get", function () {
  test("works", async function () {
    let reviews = await Reviews.get(testReviewIds[0]);
    expect(reviews).toEqual({
      id: testReviewIds[0],
        review: "test review1",
        username: "testuser1",
        meal_id: 1
     
    });
  });

  test("not found if no such review", async function () {
    try {
      await Review.get(0);
      fail();
    } catch (err) {
      expect(err instanceof NotFoundError).toBeTruthy();
    }
  });
});


//remove reviews 

describe("remove", function () {
  test("works", async function () {
    await Review.remove(testReviewIds[0]);
    const res = await db.query(
        "SELECT id FROM reviews WHERE id=$1", [testReviewIds[0]]);
    expect(res.rows.length).toEqual(0);
    });
  });
});
