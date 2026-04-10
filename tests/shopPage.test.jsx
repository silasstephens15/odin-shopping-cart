import { render, screen } from "@testing-library/react";
import { createMemoryRouter, Outlet, RouterProvider } from "react-router";
import { describe, expect, it } from "vitest";
import ShopPage from "../src/components/shopPage";
import { useState } from "react";

const LayoutWithContext = () => {
  const [cartItems, setCartItems] = useState({});
  return <Outlet context={[cartItems, setCartItems]} />;
};

const makeRouter = (items) =>
  createMemoryRouter(
    [
      {
        path: "/",
        element: <LayoutWithContext />,
        children: [
          {
            path: "shop",
            element: <ShopPage itemsMaster={items} />,
          },
        ],
      },
    ],
    { initialEntries: ["/shop"] },
  );

const makeItems = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          title: "item title",
          price: 10,
          image: "/",
          description: "description",
        },
      ]);
    }, 150);
  });
};

describe("ShopPage component", () => {
  it("renders correct heading", () => {
    render(<RouterProvider router={makeRouter(makeItems())} />);
    expect(
      screen.getByRole("heading", { name: /shop page/i }).textContent,
    ).toMatch(/shop page/i);
  });
  it("renders 'Loading' while loading", () => {
    render(<RouterProvider router={makeRouter(makeItems())} />);
    expect(screen.getByRole("main").textContent).toMatch(/loading/i);
  });
  it("renders card after loading time", async () => {
    render(<RouterProvider router={makeRouter(makeItems())} />);
    const cardHeading = await screen.findByText(/item title/i);
    expect(cardHeading).toBeInTheDocument();
  });
});
