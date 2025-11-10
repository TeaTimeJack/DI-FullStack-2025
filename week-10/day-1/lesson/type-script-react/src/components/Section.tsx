import type { ReactElement } from "react";

type SectionProps ={
    children: ReactElement,
    lang: string
}


const Section = ({children, lang}:SectionProps) => {
  return (
    <>
    <h2>Section Component</h2>
    {children}
    <h4>{lang}</h4>
    </>
  )
}

export default Section