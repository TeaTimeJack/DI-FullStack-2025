import { useState } from 'react'
import './App.css'

function App() {
  
  const [firstName, setfirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState();
  const [gender, setGender] = useState("")
  const [destanation, setDestanation] = useState("");
  const [nuts, setNuts] = useState(false);
  const [lactose, setLactose] = useState(false);
  const [vegan, setVegan] = useState(false);
  // const [userInfo, setuserInfo] = useState()

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setuserInfo({
  //     firstName:firstName,
  //     lastName:lastName,
  //     age:age,
  //     gender:gender,
  //     destanation:destanation,
  //     nuts:nuts,
  //     lactose:lactose,
  //     vegan:vegan})
  //   console.log(userInfo);
  // };


  return (
    <>
      <div className="containerForm" style={{border:"green 1px solid", padding:"10px"}}>
        <form onSubmit={handleSubmit} >
          <table>
              <tbody>
                <tr>
                  <th colSpan="2"><h1>Sample Form</h1></th>
                </tr>
              <tr>
                <td  colSpan="2"><input onChange={(e) => setfirstName(e.target.value)} placeholder='First Name' name='firstName'/></td>
              </tr>
              <tr>
                <td  colSpan="2"><input onChange={(e) => setLastName(e.target.value)} placeholder='Last Name' name='lastName'/></td>
              </tr>
              <tr>
                <td  colSpan="2"><input onChange={(e) => setAge(e.target.value)} type="number" placeholder='Age' name='age'/></td>
              </tr>
              <tr>
                <td><input onChange={(e) => setGender(e.target.value)} type="radio" id="male" name="gender" value="Male"/></td>
                <td>Male</td>
              </tr>
              <tr>
                <td><input onChange={(e) => setGender(e.target.value)} type="radio" id="female" name="gender" value="Female"/></td>
                <td>Female</td>
              </tr>
              <tr>
                <th  colSpan="2"><p>Select your destination</p></th>
              </tr>
              <tr>
                <td  colSpan="2"><select onChange={(e) => setDestanation(e.target.value)} name='selectnumber'>
                            <option value={""}>Select your destination</option>
                            <option value={"Thailand"}>Thailand</option>
                            <option value={"Japan"}>Japan</option>
                            <option value={"Brazil"}>Brazil</option>
                            <option value={"USA"}>USA</option>
                          </select>
                  </td>
              </tr>
              <tr><th colSpan="2">Dietary restrictions:</th></tr>
              <tr>
                <td><input onChange={(e) => setNuts(e.target.checked)} type='checkbox' name='yesno'/></td>
                <td>Nuts Free</td> 
              </tr>
              <tr>
                <td><input onChange={(e) => setLactose(e.target.checked)} type='checkbox' name='yesno'/></td>
                <td>Lactose Free</td>
              </tr>
              <tr>
                <td><input onChange={(e) => setVegan(e.target.checked)} type='checkbox' name='yesno'/></td>
                <td>Vegan Meal</td>
              </tr>
              <tr>
                <td colSpan="2"><input type='submit' /></td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>

      <br />
      <br />
      <br />

      <div style={{border:"purple 1px solid", padding:"10px"}}>
        <h2>Entered Information</h2>
        <p>Your Name: {firstName} {lastName}</p>
        <p>Your Age: {age}</p>
        <p>Your Gender: {gender}</p>
        <p>Your Destination: {destanation}</p>
        <p>Your Dietary Restrictions:</p>
        <ul>
            <li>Nuts Free: {nuts? "Yes":"No"}</li>
            <li>Lactose Free: {lactose? "Yes":"No"}</li>
            <li>Vegan Meal: {vegan? "Yes":"No"}</li>
        </ul>
    </div>
    </>
  )
}

export default App
