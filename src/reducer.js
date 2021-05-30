export default function reducer(state, action) {
  switch (action.type) {
    case "add":
      console.log(state.assign);
      if (state.assign !== undefined) {
        return state = {
          assign: [
            ...state.assign,
            {
              title: action.payload,
              description: action.description,
              id: Date.now(),
              completed: false,
            },
          ]
        }
          //   ...state.assign,
          //   {
          //     title: action.payload,
          //     description: action.description,
          //     id: Date.now(),
          //     completed: false,
          //   },
          // ]
        // state[assign].push({
        // title: action.payload,
        // description: action.description,
        // id: Date.now(),
        // completed: false,
      }

      return (state = {
        assign: [
          {
            title: action.payload,
            description: action.description,
            id: Date.now(),
            completed: false,
          },
        ],
      });

    case "remove":
      return state.filter((el) => {
        console.log(el.id, action.payload);
        return el.id !== action.payload;
      });

    default:
      return state;
  }
}
