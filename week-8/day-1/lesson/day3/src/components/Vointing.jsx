import { useState } from "react";

export default function Vointing() {
  const [languages, setLanguages] = useState([
    { name: "Php", votes: 0 },
    { name: "Python", votes: 0 },
    { name: "JavaSript", votes: 0 },
    { name: "Java", votes: 0 },
  ]);

  const vote = (param) => {
    const newLanguages = [...languages]
    newLanguages[param].votes++;
    setLanguages(newLanguages)
  }

  return (
    <>
      <h2>Vointing</h2>
      {languages &&
        languages.map((item, indx) => {
          return (
            <div key={indx}>
              {item.name} {item.votes}
              <button onClick={()=>vote(indx)}>vote</button>
            </div>
          );
        })}
    </>
  );
}
