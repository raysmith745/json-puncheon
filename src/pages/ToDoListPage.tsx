import AddToDoForm from "../components/AddToDoForm";
import ToDoList from "../components/ToDoList";
import ToDoSummary from "../components/ToDoSummary";
import useToDos from "../hooks/useToDos";

const ToDoListPage = () => {
  const {
    todos,
    addToDo,
    deleteToDo,
    setToDoCompleted,
    deleteAllCompletedToDos
  } = useToDos();

  return (
    <>
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
    </>
  );
}

export default ToDoListPage;
