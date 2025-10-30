import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  if (count > 5) throw new Error("Oppssss... count is greater than 5");
  
  return (
    <>
      <div>
        <button onClick={() => setCount(count + 1)}>Count: {count}</button>
      </div>
    </>
  );
}
