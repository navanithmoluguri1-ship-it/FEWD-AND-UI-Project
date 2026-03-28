function Card({ title, description }) {
  return (
    <div className="card" tabIndex="0">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default Card;