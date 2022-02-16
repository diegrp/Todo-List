import { useState, KeyboardEvent } from "react";

type Props = {
  onEnter: (taskName: string) => void;
}

// Adicionar um novo item

const AddArea = ( { onEnter }: Props ) => {

  const [ inputText, setInputText ] = useState('');
  const [ inputWait, setInputWait ] = useState(false);

  // Input submit através do teclado

  const handleKeyUp = ( e: KeyboardEvent ) => {
    /* verifica a tecla e o valor contido no inputText */
    if(e.code === 'Enter' && inputText !== ''){
      onEnter(inputText);
      setInputText('');
      /* tempo de espera, para conseguior adicionar outra tarefa */
      setInputWait(true);
      setTimeout(() => {
        setInputWait(false);
      },1000);
    }
  }

  return (
    <C.Container>
      <div className="image">➕</div>
      <input
        type="text"
        value={inputText}
        onChange={({target}) => setInputText(target.value)}
        placeholder="Adicione alguma tarefa"
        onKeyUp={handleKeyUp}
        disabled={inputWait}
      />
    </C.Container>
  )
}

export default AddArea;