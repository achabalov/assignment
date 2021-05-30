import React, { createContext, useEffect, useReducer, useState } from "react";
import reducer from "./reducer";
// import ListAssigned from "./ListAssigned/ListAssigned";
import axios from "axios";
import "./App.scss";

export const Context = createContext();

function App() {
  const [data, dispatch] = useReducer(reducer, {});
  const [titleAssigned, setTitleAssigned] = useState("");
  const [descriptionAssigned, setDescriptionAssigned] = useState("");

  function addAssigned(event) {
    if (
      (event.key === "Enter" && titleAssigned && descriptionAssigned) ||
      event.type === "submit"
    ) {
      event.preventDefault();
      dispatch({
        type: "add",
        payload: titleAssigned,
        description: descriptionAssigned,
      });
      setTitleAssigned("");
      setDescriptionAssigned("");
    }
  }

  // useEffect(() => {
  //   try {
  //     (async () => {
  //       await axios.post(
  //         "https://assignments-d950f-default-rtdb.europe-west1.firebasedatabase.app/assignment.json",
  //         data
  //       );
  //     })();
  //   } catch (e) {}
  // }, [data]);

  return (
    <Context.Provider value={dispatch}>
      <div className="Container">
        <h1>Список поручений</h1>

        <form className={"Container__form"} onSubmit={addAssigned}>
          <label>Введите название поручения</label>
          <br />
          <input
            value={titleAssigned}
            onChange={(event) => setTitleAssigned(event.target.value)}
            onKeyPress={(event) => {
              if (event.key === "Enter") event.preventDefault();
            }}
          />
          <br />
          <label>Подробное описание поручения</label>
          <br />
          <textarea
            value={descriptionAssigned}
            onChange={(event) => setDescriptionAssigned(event.target.value)}
            onKeyPress={(event) => addAssigned(event)}
          ></textarea>
          <button type="submit">Отправить</button>
        </form>

        {/* {tempstate && tempstate.length !== 0 ? ( */}
        {/* <ListAssigned data={data} /> */}
        {/* ) : <span>Пока что нету актуальных поручений</span>} */}
      </div>
    </Context.Provider>
  );
}

export default App;

// useEffect(() => {
//   try {
//     (async () => {
//       const response = await axios.get(
//         "https://assignments-d950f-default-rtdb.europe-west1.firebasedatabase.app/assignment.json"
//       );
//       const assignment = [];
//       Object.keys(response.data).forEach((key, index) => {
//         assignment.push({
//           id: key,
//           name: `Поручение № ${index + 1}`,
//         });
//       });
//       console.log(assignment);
//       const ar = [...assignment]
//       console.log(ar);
//       usetempState(ar);
//       console.log(tempstate);
//     })();
//   } catch (e) {
//     console.log(e);
//   }
// }, []);

// const init = initialState();
// console.log(init);

// useEffect( () => {
//   try {
//     (async ()=> {
//       await axios.post(
//         "https://assignments-d950f-default-rtdb.europe-west1.firebasedatabase.app/assignment.json",
//         data
//       );
//     })()
//   } catch (e) {}
// }, [data]);

// useEffect(()=> {
//   axios.get('https://assignments-d950f-default-rtdb.europe-west1.firebasedatabase.app/assignment/title.json')
//   .then(response => {
//     console.log(response);
//   })
// })

// useEffect(() => {
//   localStorage.setItem("state", JSON.stringify(state));
// }, [state]);

// useEffect(()=> {
//   const assign = []
//   const apiUrl = "https://assignments-d950f-default-rtdb.europe-west1.firebasedatabase.app/assignment.json";
//   axios.get(apiUrl)
//   .then(resp => {
//     const all = resp.data
//     Object.values(all).forEach(value => {
//       assign.push(...value)
//     })
//   })
//   usetempState(assign)
// }, [])
