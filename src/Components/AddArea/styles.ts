import styled from "styled-components";

type ContainerProps = {
  wait: boolean
}

export const Container = styled.div(( { wait }: ContainerProps ) => (
  `
  display: flex;
  align-items: center;
  background-color: ${wait && 'var(--text-color)'};
  border: 1px solid var(--border-color);
  border-radius: var(--size-forms);
  padding: var(--size-forms);
  margin: 20px 0;

  .image{
    margin-right: 5px;
  }

  input{
    flex: 1;
    width: 100%;
    border: none;
    outline: none;
    background: transparent;
    color: #fff;
    font-size: 18px;
  }

  input:disabled{
    cursor: wait;
    background-color: var(--text-color);
  }

`
));