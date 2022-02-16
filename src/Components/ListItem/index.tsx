import { useState } from "react";
import { Item } from "../../types/Item";

type Props = {
  item: Item
  onDelete: ( id: number ) => void
}

export const ListItem = ( { item, onDelete }: Props ) => {

  const [ isChecked, setIsChecked ] = useState(item.done);

  return(
    <C.Container>
      <input
        id={item.name} 
        type="checkbox"
        checked={isChecked}
        onChange={({target}) => setIsChecked(target.checked)}
      />
      <label htmlFor={item.name} >{item.name}</label>
      <button>X</button>
    </C.Container>
  )
}