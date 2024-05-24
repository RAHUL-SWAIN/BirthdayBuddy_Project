import { useState } from 'react'



function SpreadMethod() {
  const [list, setList] = useState(["a","b"]);
  const [inutValue , seInputValue ] = useState("");

  return (
    <>
    <input style={{height:"30px"}} type="text" onChange={(e) => {seInputValue(e.target.value)}} />
    <button onClick={() => {setList([...list,inutValue])}}>Add</button>
      {
        list.map((item) => {
          return <h1>{item}</h1>
        })
      }



    </>
  )
}

export default SpreadMethod;

