type Props = {
  onEnter: (taskName: string) => void;
}

// Adicionar um novo item

const AddArea = ( { onEnter }: Props ) => {

  return (
    <C.Container>
      <div className="image">➕</div>
      <input
        type="text"
        placeholder="Adicione alguma tarefa"
      />
    </C.Container>
  )
}

export default AddArea;