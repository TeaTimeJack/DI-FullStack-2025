

interface Props{
    name: string,
    messageCount: number
}

const Greeting = ({name, messageCount}:Props) => {
  return (
    <>
        <h2>Greeting</h2>
        <p>Name: {name}</p>
        <p>Message Count: {messageCount}</p>
    </>
    
  )
}

export default Greeting