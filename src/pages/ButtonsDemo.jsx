import { useState } from "react";
import Button from "../components/Button";

const ButtonsDemo = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="buttons-page">
      <div className="buttons-card">
        <h2>Interactive Buttons Demo</h2>

        <div className="btn-group">
          <Button
            label="Increase"
            onClick={() => setCount(count + 1)}
          />
          <Button
  label="Decrease"
  type="secondary"
  onClick={() => setCount(count - 1)}
/>
        </div>

        <div className="count-display">
          <h3>{count}</h3>
          <p>Current Count</p>
        </div>
      </div>
    </div>
  );
};

export default ButtonsDemo;