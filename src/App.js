import React, {useCallback,  createContext, useEffect, useReducer, useState } from "react";
import reducer from "./reducer";
import ListAssigned from "./ListAssigned/ListAssigned";
import axios from "axios";
import "./App.scss";

export const Context = createContext();

function App() {
  const [data, dispatch] = useReducer(reducer, {});
  const [titleAssignment, setTitleAssignment] = useState("");
  const [descriptionAssignment, setDescriptionAssignment] = useState("");



  // Добавляет в state новое значение через dispatch
  function addAssignment(event) {
    if (
      (event.key === "Enter" && titleAssignment && descriptionAssignment) ||
      event.type === "submit"
    ) {
      event.preventDefault();
      dispatch({
        type: "add",
        payload: titleAssignment,
        description: descriptionAssignment,
      });
      setTitleAssignment("");
      setDescriptionAssignment("");
    }
  }

  // getServerAPI функция которая должна принимать значение из firebase
  // значение которое приходит не могу обработать, в методах  Object.keys(response.data).forEach(item => { показывает нормальный лог
  /*  при попытке сохранить в массив и вернуть его из функции, выходит промис
    *** удавалось получить массив, но в таком случае Array(0) и массив не перебираемный ***
    думаю просто не понимаю концепцию
  */

    const [tmp, setTmp] = useState([])
    useEffect(()=> {
      getServerAPI();
    }, [data])

    tmp.forEach(item=> {
      console.log(item)
    })

    async function getServerAPI() {
      const response = await axios.get("https://assignments-d950f-default-rtdb.europe-west1.firebasedatabase.app/assignment.json")
      const assignmentValues = []
      console.log(response);

      Object.values(response.data).forEach(item => {
        assignmentValues.push(item)
      })
      setTmp(assignmentValues);
    }

    console.log(tmp);
    

    // добавляет значение в firebase если в изменился state 
  useEffect(() => {
    try {
      (async () => {
        await axios.post(
          "https://assignments-d950f-default-rtdb.europe-west1.firebasedatabase.app/assignment.json",
          data
        );
      })();
    } catch (e) {}
  }, [data]);

  return (
    <Context.Provider value={dispatch}>
      <div className="Container">
        <h1>Список поручений</h1>

        <form className={"Container__form"} onSubmit={addAssignment}>
          <label>Введите название поручения</label>
          <br />
          <input
            value={titleAssignment}
            onChange={(event) => setTitleAssignment(event.target.value)}
            onKeyPress={(event) => {
              if (event.key === "Enter") event.preventDefault();
            }}
          />
          <br />
          <label>Подробное описание поручения</label>
          <br />
          <textarea
            value={descriptionAssignment}
            onChange={(event) => setDescriptionAssignment(event.target.value)}
            onKeyPress={(event) => addAssignment(event)}
          ></textarea>
          <button type="submit">Отправить</button>
        </form>

        {/* {tempstate && tempstate.length !== 0 ? ( */}
        <ListAssigned data={tmp} />
        {/* ) : <span>Пока что нету актуальных поручений</span>} */}
      </div>
    </Context.Provider>
  );
}

export default App;