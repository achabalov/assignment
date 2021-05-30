import React, { useContext } from "react";
import { Context } from "../App";
import "./list.scss";

function AssigdnedItems({ assignment }) {
  const dispatch = useContext(Context);
  console.log('AssignedItems');
  return (
    <li className={"listAssign"}>
      <div className={"listAssign__description"}>
        <input type="checkbox" />
        <div className={'listAssignColumn completed'}>
          <span>{assignment.title}</span>
          <p>{assignment.description}</p>
        </div>
      </div>
      <button
        className={"listAssign__btn"}
        onClick={() => dispatch({ type: "remove", payload: assignment.id })}
      >
        Удалить
      </button>
    </li>
  );
}

export default AssigdnedItems;
