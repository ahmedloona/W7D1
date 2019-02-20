


const allTodos = (state) => {
  const keys = Object.keys(state.todos);
  let result = [];
  keys.forEach( key => {
    result.push(state.todos[key]);
  });
  return result;
}

export default allTodos;