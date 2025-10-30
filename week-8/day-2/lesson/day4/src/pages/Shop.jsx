import React from "react";
import { Link } from "react-router";

export default function Shop() {
  return (
    <div>
      <h2>Shop</h2>
      <div>
        <h2>iPhone15</h2>
        <Link to={`/product/111`}>Buy Now</Link>
      </div>
      <div>
        <h2>iPhone16</h2>
        <Link to={`/product/222`}>Buy Now</Link>
      </div>
    </div>
  );
}
