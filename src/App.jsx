import React, { useState } from "react";

const App = () => {
  const [count, setcount] = useState(0);
  const increment = () => {
    setcount(count + 1);
  };
  const decrement = () => {
    if (count == 0) {
      alert("limit zero reached it can not be decreased further");
      setcount(0);
    } else {
      setcount(count - 1);
    }
  };
  return (
    <>
      <div
        className="container"
        style={{
          backgroundColor: "yellow",
          width: "400px",
          height: "300px",
          marginTop: "200px",
          borderRadius: "8px",
        }}
      >
        <h5
          className="text-center"
          style={{ backgroundColor: "blue", marginTop: "10px", color: "white" }}
        >
          Increment Decrement:
        </h5>
        <h2
          className="text-center"
          style={{
            backgroundColor: "violet",
            marginTop: "10px",
            color: "black",
          }}
        >
          {count}
        </h2>
        <button
          className="btn btn-success"
          style={{ float: "left" }}
          onClick={increment}
        >
          +
        </button>
        <button
          className="btn btn-danger"
          style={{ float: "right" }}
          onClick={decrement}
        >
          -
        </button>
      </div>
    </>
  );
};

export default App;
