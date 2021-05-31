import React, { useContext } from "react";
import { Context } from "../App";
import "./list.scss";

function AssigdnedItems({ assign }) {
  const dispatch = useContext(Context);
  console.log(assign);
  return (
    <li className={"listAssign"}>
      <div className={"listAssign__description"}>
        <input type="checkbox" />
        <div className={'listAssignColumn completed'}>
          <span>{assign.title}</span>
          <p>{assign.description}</p>
        </div>
      </div>
      <button
        className={"listAssign__btn"}
        onClick={() => dispatch({ type: "remove", payload: assign.id })}
      >
        Удалить
      </button>
    </li>
  );
}

export default AssigdnedItems;
