import './App.css';

const Task = (value) => { // retorna item da lista
  return (
    <li>{value}</li>
  );
}

// array de tarefas
const TaskList = ['Segunda-dose da vacina', 'Negociar com a Renner', 'Passear com a Mel'];

function App() {
  return (
    <>
    <h1>Lista de Tarefas</h1>
    <ul>
      {TaskList.map(task => Task(task))}
    </ul>
    </>
  );
}

export default App;
