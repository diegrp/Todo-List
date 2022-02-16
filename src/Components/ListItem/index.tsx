import { useState } from "react";
import { Item } from "../../types/Item";

type Props = {
  item: Item
  onDelete: ( id: number ) => void
}

export const ListItem = ( { item, onDelete }: Props ) => {

  const [ isChecked, setIsChecked ] = useState(item.done);
  const [ checkDelete, setCheckDelete ] = useState(false);

  return(
    <C.Container>
      <input
        id={item.name} 
        type="checkbox"
        checked={isChecked}
        onChange={({target}) => setIsChecked(target.checked)}
      />
      <label htmlFor={item.name} >{item.name}</label>
      <button onClick={() => {
        onDelete(item.id);
        setCheckDelete(true);
      }}>X</button>
    </C.Container>
  )
}