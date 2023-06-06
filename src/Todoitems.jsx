import { useState } from "react";
export default function Todoitems(props) {
  
  const [done, setDone] = useState(false);
  const [disable, setDisable] = useState(true);
  const [todotext, setTodotext] = useState(props.todotext);

  function handleDelete() {
    props.setArray(props.array.filter((e) => e !== props.content));
  }

  function handleEdit() {
    if(done===false){
        setDisable(!disable)
    }
  }

  function handleEditOnkeyDwon(e) {
    if (e.key === "Enter") {
      setDisable(!disable);
    }
  }

  function handleCheck() {
    setDone(!done);
    setDisable(true);
  }

  return (
    <form
      className={`flex justify-between w-full items-center h-10 bg-slate-50 rounded-md mb-2 ${
        done ? " opacity-70" : null
      }`}
    >
      {done ? (
        <span
          className="material-symbols-outlined w-1/12 mr-2 sm:mr-0 cursor-pointer"
          onClick={handleCheck}
        >
          close
        </span>
      ) : (
        <span
          className="material-symbols-outlined w-1/12 mr-2 sm:mr-0 cursor-pointer"
          onClick={handleCheck}
        >
          done
        </span>
      )}
      <input
        className=" ml-1 pl-2 w-8/12 sm:w-9/12 rounded-2xl focus:outline-red-200 border-none mr-1"
        type="text"
        value={todotext}
        disabled={disable}
        onChange={(e) => setTodotext(e.target.value)}
        onKeyDown={handleEditOnkeyDwon}
      />
      <div className=" mr-1 w-3/12 sm:w-2/12 flex">
        <div
          className="material-symbols-outlined cursor-pointer w-1/2"
          onClick={handleEdit}
        >
          edit
        </div>
        <button
          className="material-symbols-outlined cursor-pointer w-1/2"
          onClick={handleDelete}
        >
          delete
        </button>
      </div>
    </form>
  );
}