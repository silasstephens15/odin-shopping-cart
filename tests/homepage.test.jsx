import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Homepage } from "../src/components/homePage";
import { createBrowserRouter, RouterProvider } from "react-router";
import routes from "../src/routes";
import userEvent from "@testing-library/user-event";

describe("Homepage component", () => {
  let router = createBrowserRouter(routes);
  it("renders correct heading", () => {
    render(
      <RouterProvider router={router}>
        <Homepage />
      </RouterProvider>,
    );
    expect(
      screen.getByRole("heading", { name: /shopping/i }).textContent,
    ).toMatch(/shopping/i);
  });
  it("renders navigation", () => {
    render(
      <RouterProvider router={router}>
        <Homepage />
      </RouterProvider>,
    );
    const listText = screen
      .getAllByRole("listitem")
      .map((element) => element.textContent);
    expect(listText).toContain("Shop");
    expect(listText).toContain("Cart");
  });
  it("links to shop page", async () => {
    const user = userEvent.setup();

    render(
      <RouterProvider router={router}>
        <Homepage />
      </RouterProvider>,
    );
    const link = screen.getByRole("link", { name: /shop/i });

    await user.click(link);

    expect(screen.getByRole("heading", { name: /shop/i }).textContent).toMatch(
      /shop/i,
    );
  });
});
