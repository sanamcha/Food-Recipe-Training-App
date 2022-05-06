import React from "react";
import { render } from "@testing-library/react";
import PostMealList from "../PostMealList";
import { MemoryRouter } from "react-router";

it("matches snapshot ", function () {
    const { asFragment } = render(
        <MemoryRouter>
          <PostMealList
              meal="Chicken soup"
              category="chicken"
              area="indian"
              instructions="boil water and add chicken soup"
              image="https://www.themealdb.com/images/media/meals/tyywsw1505930373.jpg"
              youtube="https://www.youtube.com/watch?v=kqEfk801E94"
          />
        </MemoryRouter>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  