"use strict";

const db = require("../db.js");
const { BadRequestError} = require("../expressError");
const Meal = require("./meal.js");
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


//create
describe("create", function () {
    const newMeal = {
        meal:"new",
        category:"New",
        area:"new",
        instructions:"new instruction",
        image:"http://new.img",
        youtube:"http://new.video",
        reviews:"new reviews"
        
    };

    test("works",  async function () {
        let meal = await Meal.create(newMeal);
        expect(meal).toEqual(newMeal);

        const result = await db.query(`SELECT meal,
                category,
                area,
                instructions,
                image,
                youtube,
                reviews
            FROM meals 
            WHERE id = $1
        `);
        expect(result.rows).toEqual([
            {
                meal:"new",
                category:"New",
                area:"new",
                instructions:"new instruction",
                image:"http://new.img",
                youtube:"http://new.video",
                reviews:"new reviews"
            },
        ]);
    });

    test("bad request with duplicate", async function () {
        try {
            await Meal.create(newMeal);
            await Meal.create(newMeal);
            fail();
          } catch (err) {
            expect(err instanceof BadRequestError).toBeTruthy();
          }
    })
});

describe("findAll", function () {
    test("works: all", async function () {
        let meals = await Meal.findAll();
        expect(meals).toEqual([
            {
                meal:"chicken",
                category:"chicken",
                area:"indian",
                instructions:"fry in oil",
                image:"http://chicken.img",
                youtube:"http://chicken.video",
                reviews:"i like this food",
            },
            {
                meal:"beef",
                category:"beef",
                area:"american",
                instructions:"do barbeque",
                image:"http://beef.img",
                youtube:"http://beef.video",
                reviews:"best food ever",
            },
            {
                meal:"new",
                category:"New",
                area:"new",
                instructions:"new instruction",
                image:"http://new.img",
                youtube:"http://new.video",
                reviews:"new reviews",
            },
        ]);
    });

   

      //get by id
describe("get", function() {
    test("works", async function() {
        let meal = await Meal.get(1);
        expect(meal).toEqual({
            meal:"chicken",
            category:"chicken",
            area:"indian",
            instructions:"fry in oil",
            image:"http://chicken.img",
            youtube:"http://chicken.video",
            reviews: [
            { 
            id:testReviewIds[0],
            review:"i like this food", username:"testuser1",
            meal_id:1
            },
            {
            id:testReviewIds[1],review:"best food ever", username:"testuser2",
            meal_id:2
            },
            ],
        });
    });  
        
//to remove

describe("remove", function () {
    test("works", async function () {
      await Meal.remove("c1");
      const res = await db.query(
          "SELECT id FROM meals WHERE id=1");
      expect(res.rows.length).toEqual(0);
    });
});
                   
              