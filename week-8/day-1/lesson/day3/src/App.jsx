import "./App.css";
import ArticleList from "./components/ArticleList";
import { useState } from "react";
import Vointing from "./components/Vointing";

function App() {
  const [show, setShow] = useState(true);
  const [username, setUserName] = useState("");
  const [num, setNum] = useState();
  const [yesno, setYesNo] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('')
    console.log(e.target.username.value, username);
    console.log(e.target.selectnumber.value, num);
    console.log(e.target.yesno.checked, yesno);
  };
  return (
    <>
      <h2>useEffect / Voiting App / Forms ...</h2>
      {/* <button onClick={() => setShow(!show)}>
        {show ? "Remove List" : "Show List"}
      </button>
      {show ? <ArticleList /> : null} */}
      {/* <Vointing /> */}
      <form onSubmit={handleSubmit} >
        <input
          onChange={(e) => setUserName(e.target.value)}
          placeholder='username'
          name='username'
        />
        <br />
        <select onChange={(e) => setNum(e.target.value)} name='selectnumber'>
          <option value={1}>One</option>
          <option value={2}>Two</option>
          <option value={3}>Three</option>
        </select>
        <br />
        Yes/No{" "}
        <input
          onChange={(e) => setYesNo(e.target.checked)}
          type='checkbox'
          name='yesno'
        />
        <br />
        <input type='submit' />
      </form>
    </>
  );
}

export default App;
