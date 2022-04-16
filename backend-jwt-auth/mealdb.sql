\echo 'Delete and recreate meal_db db?'
\prompt 'Return for yes or control-C to cancel > ' foo

DROP DATABASE recipedb;
CREATE DATABASE recipedb;
\connect recipedb

\i mealdb-schema.sql
\i mealdb-seed.sql

\echo 'Delete and recreate mealsdata_test db?'
\prompt 'Return for yes or control-C to cancel > ' foo

DROP DATABASE recipedb_test;
CREATE DATABASE recipedb_test;
\connect recipedb_test

\i mealdb-schema.sql
