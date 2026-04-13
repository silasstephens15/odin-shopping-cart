import { render, screen } from "@testing-library/react";
import { createMemoryRouter, Outlet, RouterProvider } from "react-router";
import { describe, expect, it } from "vitest";
import { useState } from "react";
import Cart from "../src/components/cartPage";
import userEvent from "@testing-library/user-event";

const LayoutWithContext = () => {
  const [cartItems, setCartItems] = useState({
    1: [
      1,
      {
        id: 1,
        title: "item title",
        price: 10,
        image: "/",
        description: "description",
      },
    ],
  });
  return <Outlet context={[cartItems, setCartItems]} />;
};

const makeRouter = () =>
  createMemoryRouter(
    [
      {
        path: "/",
        element: <LayoutWithContext />,
        children: [
          {
            path: "cart",
            element: <Cart />,
          },
        ],
      },
    ],
    { initialEntries: ["/cart"] },
  );

describe("Cart page", () => {
  it("renders correct heading", () => {
    render(<RouterProvider router={makeRouter()} />);
    expect(screen.getByRole("heading", { name: /cart/i })).toBeInTheDocument();
  });
  it("renders card", () => {
    render(<RouterProvider router={makeRouter()} />);
    expect(screen.getByText(/item title/i)).toBeInTheDocument();
  });
  it("buttons add and subtract", async () => {
    const user = userEvent.setup();
    render(<RouterProvider router={makeRouter()} />);
    const addButton = await screen.findByRole("button", { name: "+" });
    const subtractButton = await screen.findByRole("button", { name: "-" });
    const input = await screen.findByRole("spinbutton");
    await user.click(addButton);
    expect(input.value).toEqual("2");
    await user.click(subtractButton);
    expect(input.value).toEqual("1");
    await user.click(subtractButton);
    expect(screen.queryByText(/item title/i)).not.toBeInTheDocument();
  });
});
