import UserFavoriteAnimals from './UserFavoriteAnimals'
import Exercise from "./Exercise3"
import './App.css'

function App() {
  const myelement = <h1>I Love JSX!</h1>;
  const sum = 5+5;
  const user = {
  firstName: 'Bob',
  lastName: 'Dylan',
  favAnimals : ['Horse','Turtle','Elephant','Monkey']
  };

  return (
    <>
      {myelement}
      <p>Hello World</p>
      <p>React is {sum} times better with JSX</p>
      <h3>{user.firstName}</h3>
      <h3>{user.lastName}</h3>
      <UserFavoriteAnimals animals={user.favAnimals}/>
      <Exercise />
      
    </>
  )
}

export default App
