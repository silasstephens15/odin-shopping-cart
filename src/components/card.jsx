function Card({ title, price, description, image }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>Price: {price}</p>
      <img src={image} />
      <p>{description}</p>
      <div className="card-buttons">
        <label htmlFor="amount"></label>
        <button>+</button>
        <input type="number" name="amount" value={0} />
        <button>-</button>
        <button>Add to cart</button>
      </div>
    </div>
  );
}

export default Card;
