import { useState } from "react";
import { dummyData } from "./data/todos";
import AddToDoForm from "./components/AddToDoForm";
import ToDoList from "./components/ToDoList";
import ToDoSummary from "./components/ToDoSummary";

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
        id: Date.now(),
        title,
        completed: false
      },
      ...prevToDos
    ]);
  };

  function deleteToDo(id: number) {
    setToDos(prevToDos => prevToDos.filter(todo => todo.id !== id))
  }

  function deleteAllCompletedToDos() {
    setToDos(prevToDos => prevToDos.filter(todo => !todo.completed))
  }

  return (
    <main className="py-10 h-screen space-y-5 overflow-y-auto">
      <h1 className="font-bold text-3xl text-center">Your ToDos</h1>
      <div className="max-w-lg mx-auto bg-slate-100 rounded-md p-5 space-y-6">
        <AddToDoForm
        onSubmit={addToDo}/>
        <ToDoList
        toDos={todos}
        onCompleteChange={setToDoCompleted}
        onDelete={deleteToDo}/>
      </div>
      <ToDoSummary
        todos={todos}
        deleteAllCompleted={deleteAllCompletedToDos}
      />
    </main>
  );
}

export default App;
