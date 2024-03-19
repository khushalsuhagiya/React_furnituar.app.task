
import React, { useRef, useState } from 'react'
/* React Hook UseRef : - DOM Manupilation */


const UseRef = () => {
const [name , setName] = useState("Vivek")

const RefElement = useRef(0)
const RefElements = useRef(0)
const divElements = useRef(0)

function OnClick(){
  console.log(RefElement);
//   RefElement.current.value = "SkillQode"
  RefElement.current.focus()
  RefElement.current.style.color = "red"
  setName("SkillQode")
}

function ChangeStyle(){
  RefElements.current.style.backgroundColor = "red"
  RefElements.current.style.color = "green"
}

function divStyle(){
  divElements.current.style.backgroundColor = "green"
  divElements.current.style.color = "white"
}
  return (
    <div>
      <h1 ref={RefElements}>This is useRef Hook</h1>
      <input ref={RefElement} type="text" value={name} onChange={(e) => e.target.value}/>
      <button onClick={OnClick}>Reset</button>
      <button onClick={ChangeStyle}>Change style</button>
      <div ref={divElements} class="h-96 w-96 border-solid border-2 border-black">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit, itaque ea, est ut laboriosam repudiandae reiciendis necessitatibus rem repellat, inventore perspiciatis incidunt reprehenderit delectus voluptates ipsum accusamus esse nihil fugiat?
      </div>
      <button onClick={divStyle}>div Style</button>
    </div>
  )
}

export default UseRef
