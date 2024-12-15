import { useState } from "react";
import ToDoItem from "./components/ToDoItem";
import { dummyData } from "./data/todos";
import AddToDoForm from "./components/AddToDoForm";

function App() {

  const [todos, setToDos] = useState(dummyData);
  
  function setToDoCompleted(id: number, completed: boolean) {
    setToDos((prevToDos) => prevToDos.map(todo => (
      todo.id === id ? {...todo, completed} : todo
    )));
  };

  function addToDo(title: string) {
    setToDos(prevToDos => [
      {
        id: prevToDos.length + 1,
        title,
        completed: false
      },
      ...prevToDos
    ]);
  };

  return (
    <main className="py-10 h-screen space-y-5">
      <h1 className="font-bold text-3xl text-center">Your ToDos</h1>
      <div className="max-w-lg mx-auto bg-slate-100 rounded-md p-5 space-y-6">
        <AddToDoForm
        onSubmit={addToDo}/>
        <div className="space-y-2">
          {todos.map((todo) => (
            <ToDoItem todo={todo}
            key={todo.id}
            onCompletedChange={setToDoCompleted}/>
          ))}
        </div>
      </div>
    </main>
  );
}

export default App;
