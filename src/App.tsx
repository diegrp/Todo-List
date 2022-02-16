import { useState } from "react";
import * as C from "./App.styles";
import { Item } from "./types/Item";
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

  return (
    <C.Container>
      <C.Wrapper>

        <C.Heading>Lista de Tarefas</C.Heading>

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