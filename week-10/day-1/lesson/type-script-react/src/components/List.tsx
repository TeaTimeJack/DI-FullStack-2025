import type {ReactElement} from 'react'

type ListProps<T> = {
    items: T[]
}


const List = <T,>({items}:ListProps<T>):ReactElement => {
  return (
    <>
    <h3>List of Generic Items</h3>
    {items && items.map((item, index) =>{
        return (
            <div key={index}>{item as ReactElement}</div>
        )
    })}
    </>
    
  )
}

export default List