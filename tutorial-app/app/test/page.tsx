type Todo = {
  title: string;
}

async function getData(){
  const res = await fetch('http://localhost:3000/api/todos');
  return await res.json();
}

export default async function Page() {
  const todos: Todo[] = await getData();

  return (
    <div>
      <h1>Test Page</h1>;
      {todos.map((todo) => (
        <div>{todo.title}</div>))}
    </div>
  )
}