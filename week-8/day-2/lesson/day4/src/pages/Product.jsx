import React, { useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router";

export default function Product() {
  /** id /suk */
  const { id } = useParams();
  const navigate = useNavigate();
  console.log(id);

  useEffect(() => {
    setTimeout(() => {
      navigate("/shop");
    }, 3000);
  });

  const goHome = () => {
    navigate("/");
  };
  return (
    <div>
      <h2>Product: {id}</h2>
      <Link to={"/shop"}>Continue Shopping</Link>
      <div></div>
      <Link to={"/"}>Go Home</Link>
      <div></div>
      <button onClick={() => goHome()}>Go Home</button>
    </div>
  );
}
