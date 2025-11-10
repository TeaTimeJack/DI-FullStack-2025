// import React from 'react'
import type { ReactNode} from "react"

type HeadingProps ={
    title: string,
    subtitle:string
}

const Heading = ({title, subtitle}: HeadingProps): ReactNode => {
  return (
    <>
    <h1>Heading</h1>
    <p>{title}</p>
    <p>{subtitle}</p>
    </>
    
  )
}

export default Heading