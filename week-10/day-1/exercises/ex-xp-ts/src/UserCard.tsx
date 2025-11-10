

interface OptinalProps{
    name: string,
    age: number,
    role: string
}

const UserCard = ({name="Avner", age=16, role="Maneger"}: OptinalProps) => {
  return (
    <div>
    <h2>UserCard</h2>
    <p>Name: {name}</p>
    <p>Age: {age}</p>
    <p>Role: {role}</p>
    </div>
    
  )
}

export default UserCard