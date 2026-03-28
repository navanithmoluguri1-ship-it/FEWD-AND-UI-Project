import { useState } from "react";
import Card from "../components/Card";
import Button from "../components/Button";

const CardsDemo = () => {
  const [show, setShow] = useState(true);

  return (
    <div className="cards-wrapper">
      <div className="cards-card">
        <h2>Cards Showcase</h2>

        <div className="toggle-btn">
          <Button
            label={show ? "Hide Card" : "Show Card"}
            onClick={() => setShow(!show)}
          />
        </div>

        <div className="card-area">
          {show && (
            <Card
              title="React Card"
              description="This is a reusable configurable card component."
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default CardsDemo;