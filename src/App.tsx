import { useState, useEffect } from "react";
import * as C from "./App.styles";
import { Item } from "./types/Item";
import AddArea from "./Components/AddArea";
import { ListItem } from "./Components/ListItem";

// Render App final

const App = () => {

  // Estados inicias de carregamento e armazenamento de nossas tarefas

  const [ loading, setLoading ] = useState(false);

  const [ list, setList ] = useState<Item[]>([]);

  // Função para adicionar uma nova tarefa em nossa lista

  const handleAddTask = ( taskName: string ) => {
    setLoading(true);
    setTimeout(() => {
      let newList = [...list];
      newList.push({
        id: list.length + 1,
        name: taskName,
        done: false,
      });
      setLoading(false);
      setList(newList);
    },1000);
  }

  // Remove alguma tarefa adicionada em nossa lista

  const handleDeleteTask = ( id: number ) => {
    setLoading(true);
    setTimeout(() => {
      setList(list.filter((item) => item.id !== id));
      setLoading(false);
    },1000);
  }

  // Salva qualquer alteração em nossa lista no localStorage

  useEffect(() => {
    let savedLists = JSON.parse(window.localStorage.getItem('react-list-item') || "");
    if(savedLists){
      setList(savedLists);
    }
  },[]);

  useEffect(() => {
    window.localStorage.setItem('react-list-item', JSON.stringify(list));
  },[list]);

  return (
    <C.Container>
      <C.Wrapper>

        <C.Heading>Lista de Tarefas</C.Heading>

        {/* Componente para adicionar uma nova tarefa em nossa lista */}

        <AddArea onEnter={handleAddTask} />

        {/* Mapeamento da listagem de nossas tarefas, através de um componente */}

        {list.map((item, index) => (
          <ListItem 
            key={index} 
            item={item}
            onDelete={handleDeleteTask}
          />
        ))}

        {/* Tratamento de carregamento sobre nossa lista de tarefas */}

        {loading && 
          <div className="emoji">Carregando... 💅</div>
        }

        {!loading && list.length === 0 &&
          <div className="emoji">Adicione algum item na lista de tarefas! 🥣</div>
        }
        
      </C.Wrapper>
    </C.Container>
  )
}

export default App;