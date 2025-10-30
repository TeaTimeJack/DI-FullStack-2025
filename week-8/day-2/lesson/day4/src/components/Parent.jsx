import React from "react";

export default function Parent({children, admin}) {
  console.log("parent props=>", children, admin);

  if (admin === "john") {
    return children;
  }
  return (
    <div>
      <h2>Parent</h2>
    </div>
  );
}
