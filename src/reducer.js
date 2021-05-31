export default function reducer(state, action) {
  switch (action.type) {
    case "add":
      return {
              title: action.payload,
              description: action.description,
              id: Date.now(),
              completed: false,
            }

    case "remove":
      return state.filter((el) => {
        console.log(el.id, action.payload);
        return el.id !== action.payload;
      });

    default:
      return state;
  }
}
