import { Item } from "../../types/Item"

type Props = {
  item: Item
  onDelete: ( id: number ) => void
}

export const ListItem = ( { item, onDelete }: Props ) => {
  return(
    <C.Container>
      <input
        id={item.name} 
        type="checkbox" 
      />
      <label htmlFor={item.name} >{item.name}</label>
      <button>X</button>
    </C.Container>
  )
}