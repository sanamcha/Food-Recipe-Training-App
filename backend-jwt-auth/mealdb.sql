\echo 'Delete and recreate meals_app db?'
\prompt 'Return for yes or control-C to cancel > ' foo

DROP DATABASE meals_app;
CREATE DATABASE meals_app;
\connect meals_app

\i mealdb-schema.sql
\i mealdb-seed.sql

\echo 'Delete and recreate meal_app_test db?'
\prompt 'Return for yes or control-C to cancel > ' foo

DROP DATABASE meals_app_test;
CREATE DATABASE meals_app_test;
\connect meals_app_test

\i mealdb-schema.sql
