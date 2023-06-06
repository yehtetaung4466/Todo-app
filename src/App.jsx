import { useState, useRef} from "react"
import Todoitems from "./Todoitems"

export default function App(){
  const inputElement=useRef(null)
  const [content, setContent] = useState("");
  const [array, setArray] = useState([]);

  function handleClick(){
    if(content !== ""){
      setArray([...array, content]);
      setContent("");
    }
    if(content ===""){
      inputElement.current.focus()
    }
  }

  return(
    <div className="h-screen w-screen bg-emerald-200 flex items-center flex-col">
      <div className="w-3/5 h-10 mt-10 flex items-center max-w-md">
        <input ref={inputElement}
        type="text" className="input w-10/12 h-5/6 focus:outline-none" placeholder="Add todo here" value={content} onChange={e => setContent(e.target.value)}/>
        <button className="btn-xs btn w-2/12 h-5/6" onClick={handleClick}>add</button>
      </div>
      <ul className="mt-5 w-3/5 h-full rounded-lg max-w-md flex flex-col">
        {array.map((i,)=> <Todoitems todotext={i} key={i} content={i} array={array} setArray={setArray}/>)}
      </ul>
    </div>
  )
}