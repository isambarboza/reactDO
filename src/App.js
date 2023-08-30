import { useEffect, useState } from "react";
import "./App.css"
function App() {

  const [ listaTarefas, setListaTarefas ] = useState ([]);
  const [tarefa, setTarefa ] = useState ( {id: '' , texto: "" , status: ""});

  function addTarefa()
  {
    if( tarefa.texto !=="" ){
      setListaTarefas([...listaTarefas, tarefa ]);
    }
  }


  function excluirTarefa(id) {
    const novalista = listaTarefas.filter( tarefa => tarefa.id !== id);
    setListaTarefas(novalista);
  }


  function concluirTarefa(id, status) {
    const index = listaTarefas.findIndex( (tarefa) => tarefa.id === id );
        listaTarefas[index].status = !status;
    setListaTarefas( [...listaTarefas] );
  }


  useEffect(() =>{
    setTarefa( { id: "", texto: "", status:"" });
}, [listaTarefas])


  return (
    <>
    
    <header>
      <h1 className="tarefas">Tarefas da semana </h1>
    </header>    
      <div>
        <input type="text" nome= "tarefa" placeholder="Digite sua tarefa" value={tarefa.texto} onChange={ (e) => setTarefa( {id: Math.random(), texto: e.target.value, status: false })} />  
        <ul> 
          {listaTarefas.map( (item, index ) => (
          <li key={item.id}> <div className="texto">{item.texto}</div><button className="statusTarefa" onClick={() => concluirTarefa(item.id, item.status) }> {item.status ? '🟢' : '🔴'}</button>  <button className="excluirTarefa" onClick={() => excluirTarefa(item.id) }>Excluir</button></li>
          ))}
        </ul>
      </div>
      <div className="teste">
        <button onClick={addTarefa} className="adicionar">✚</button>
      </div>
      <div>
        <h1 className="rodape"> 📖</h1>
      </div>
       
    </>
   
  );
}


export default App;