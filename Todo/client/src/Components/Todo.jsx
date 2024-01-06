/* eslint-disable react/jsx-key */
const Todo = ({ todo }) => {
  return (
    <div>
      {todo.map(function (todo) {
        return (
          <div>
            <h1>{todo.name}</h1>
            <p>{todo.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Todo;
