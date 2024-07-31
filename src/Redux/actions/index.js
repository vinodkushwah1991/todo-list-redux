export const increment = () => {
    return {
      type: "INCREMENT",
    };
  };
  
  export const decrement = () => {
    return {
      type: "DECREMENT",
    };
  };
  
  export const reset = () => {
    return {
      type: "RESET",
    };
  };
  
  export const logIn = () => {
    return {
      type: "LOG_IN",
    };
  };
  
  export const logOut = () => {
    return {
      type: "LOG_OUT",
    };
  };
  export const addTodo = (text) => {
    console.log(text,'text');
    return {
      type: "ADDTODO",
      payload: {
        id: new Date().getTime(),
        text: text,
        completed: false,
      },
    };
  };
  
  export const deleteTodo = (id) => {
    return {
      type: "REMOVETODO",
      payload: id,
    };
  };
  export const ToggleTodo = (id) => {
    return {
      type: "TOGGLE_TODO",
      payload: id,
    };
  };
  export const editTodo = (task) => ({
    type: "EDITTODO",
    payload: task
  });