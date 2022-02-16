import styled from "styled-components";

type ContainerProps = {
  checkdel: boolean
  done: boolean
}

export const Container = styled.div(( { checkdel, done }: ContainerProps ) => (
` 
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--background-container);
  padding: var(--size-forms);
  border-radius: var(--size-forms);
  margin-bottom: var(--size-forms);
  transition: 0.2s linear; 
  opacity: ${done ? "0.7":"initial"};

  input{
    width: 25px;
    height: 25px;
    margin-right: 5px;
    cursor: pointer;
  }

  input:disabled{
    cursor: wait;
  }

  label{
    color: #ccc;
    text-decoration: ${done ? 'line-through':'initial'};
    user-select: none;
    cursor: pointer;
  }

  button{
    font-size: 10px;
    width: 25px;
    height: 25px;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    background-color: #333;
    color: #ccc;
    transition: 0.3s linear;
  }

  button:hover{
    background-color: transparent;
    border: 1px solid white;
    color: white;
  }
`
));
