const { Button } = require("@material-ui/core");
const { useState } = require("react");

const Test = () => {
  const [loading, setLoading] = useState(false);

  const [todos, setTodos] = useState([]);
  const [users, setUsers] = useState([]);

  const getTodos = async () => {
    setLoading(true);
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const resData = await res.json();
    setTodos(resData);
    setLoading(false);
  };
  const getUsers = async () => {
    setTodos([]);
    setLoading(true);
    console.log(loading)
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const resData = await res.json();
    setUsers(resData);
    setLoading(false);
  };

  return (
    <div>
      <Button
        color="primary"
        variant="contained"
        disabled={loading}
        onClick={getTodos}
      >
        Get Todos
      </Button>
      <Button
        color="primary"
        variant="contained"
        disabled={loading}
        onClick={getUsers}
      >
        Get Users
      </Button>
      {todos.map((item) => (
        <div>{JSON.stringify(item)}</div>
      ))}
      {users.map((item) => (
        <div>{JSON.stringify(item)}</div>
      ))}
    </div>
  );
};

export default Test;
