import React, { useState } from "react";
import { useDispatch } from "react-redux";
import noteImg from "../assets/images/notes.png";
import plusImg from "../assets/images/plus.png";
import doubleTickImg from "../assets/images/double-tick.png";
import { clearSelections, selectall } from "../redux/todos/actions";
import addToServer from "../redux/todos/thunk/addToServer";

const Header = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const onChangeHandler = (e) => {
    setInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addToServer(input));
    setInput("");
  };

  const completeAllHandler = () => {
    dispatch(selectall());
  };

  const handleClearSelections = () => {
    dispatch(clearSelections());
  };

  return (
    <div>
      <form
        className="flex items-center bg-gray-100 px-4 py-4 rounded-md"
        onSubmit={submitHandler}
      >
        <img src={noteImg} className="w-6 h-6" alt="Add todo" />
        <input
          type="text"
          placeholder="Type your todo"
          value={input}
          onChange={onChangeHandler}
          className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
        />
        <button
          type="submit"
          className={`appearance-none w-8 h-8 bg-[url('${plusImg}')] bg-no-repeat bg-contain`}
        ></button>
      </form>

      <ul className="flex justify-between my-4 text-xs text-gray-500">
        <li
          className="flex space-x-1 cursor-pointer"
          onClick={completeAllHandler}
        >
          <img className="w-4 h-4" src={doubleTickImg} alt="Complete" />
          <span>Complete All Tasks</span>
        </li>
        <li className="cursor-pointer" onClick={handleClearSelections}>
          Clear completed
        </li>
      </ul>
    </div>
  );
};

export default Header;
