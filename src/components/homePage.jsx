import NavBar from "./navBar";

function Homepage() {
  return (
    <>
      <header>
        <h1>Silas's Shopping Page</h1>
        <NavBar />
      </header>
      <main>
        <h2>What is this?</h2>
        <p>
          This is an example of a shopping page that you might see on a modern
          website. It uses React, as well as several other JavaScript libraries
          for testing and front-end routing. This project will be completed in
          accordance with the{" "}
          <a href="https://www.theodinproject.com/">Odin Project's</a> Shopping
          Cart project. You should be able to navigate to some pages and add
          items which will show up in your cart. All items come from the{" "}
          <a href="https://fakestoreapi.com">Fake Store API.</a>
        </p>
        <h2>Who Am I?</h2>
        <p>
          Although my degree is in chemistry, I've always had an interest in
          computers. I've been taking time to work through the Odin Project and
          learn web development, as well as other computer science concepts. I
          hope one day to work in computational chemistry and it is my hope that
          learning these computer science topics will greatly aid me in
          achieving that goal.
        </p>
      </main>
    </>
  );
}

export { Homepage };
