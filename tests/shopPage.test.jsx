import { render, screen } from "@testing-library/react";
import { createMemoryRouter, Outlet, RouterProvider } from "react-router";
import { describe, expect, it } from "vitest";
import ShopPage from "../src/components/shopPage";
import { useState } from "react";
import userEvent from "@testing-library/user-event";

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
  it("adds to cart", async () => {
    const user = userEvent.setup();
    render(<RouterProvider router={makeRouter(makeItems())} />);
    const button = await screen.findByRole("button", { name: /add to cart/i });
    await user.click(button);
    expect(screen.getByRole("link", { name: /cart/i }).textContent).toMatch(
      /cart 1/i,
    );
  });
  it("adds multiple to cart", async () => {
    const user = userEvent.setup();
    render(<RouterProvider router={makeRouter(makeItems())} />);
    const button = await screen.findByRole("button", { name: /add to cart/i });
    const addButton = await screen.findByRole("button", { name: "+" });
    const subtractButton = await screen.findByRole("button", { name: "-" });
    await user.click(addButton);
    await user.click(subtractButton);
    await user.click(addButton);
    expect(screen.getByRole("spinbutton").value).toEqual("2");
    await user.click(button);
    expect(screen.getByRole("link", { name: /cart/i }).textContent).toMatch(
      /cart 2/i,
    );
  });
});
