import { useState } from "react";
import * as C from "./App.styles";
import { Item } from "./types/Item";
import { ListItem } from "./Components/ListItem";

// Render App final

const App = () => {

  // Estados inicias de carregamento e armazenamento de nossas tarefas

  const [ loading, setLoading ] = useState(false);

  const [ list, setList ] = useState<Item[]>([]);

  return (
    <C.Container>
      <C.Wrapper>

        <C.Heading>Lista de Tarefas</C.Heading>

        {/* Mapeamento da listagem de nossas tarefas, através de um componente */}

        {list.map((item, index) => (
          <ListItem 
            key={index} 
            item={item} 
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