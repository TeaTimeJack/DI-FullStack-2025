
const UserFavoriteAnimals = (props) =>{
   
   return (
      <ul>
         {props.animals.map((item, index) =>{
            return (<li key = {index}><span>{item}</span></li>)
         })}
      </ul>
   )
}

export default UserFavoriteAnimals