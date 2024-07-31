const initialState = {
  tasks: []
};
function todoReducer(state = initialState, action) {
  console.log(action.type);
    switch (action.type) {
        case "ADDTODO":
          console.log("Adding task:", action.payload);
          return {
            ...state,
            tasks: [...state.tasks, action.payload]
          };
        case "REMOVETODO":
          return {
            ...state,
            tasks: state.tasks.filter(task => task.id !== action.payload)
          };
          case "TOGGLE_TODO":
            return {
              ...state,
              tasks : state.tasks.map(item =>
              item.id === action.payload ? { ...item, completed: !item.completed } : item
          )}
          case "EDITTODO":
            return {
              ...state,
              tasks: state.tasks.map(task =>
                task.id === action.payload.id ? { ...task, text: action.payload.text } : task
              )
            };
        default:
          return state;
      }
    };

export default todoReducer;