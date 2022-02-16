import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  background-color: var(--background-color);
  color: white;
`;

export const Wrapper = styled.div`
  max-width: 980px;
  margin: 0 auto;
  padding: var(--size-bottom) 2%;
`;

export const Heading = styled.h1`
  color: #FFF;
  text-align: center;
  text-transform: uppercase;
  padding-bottom: var(--size-bottom);
  border-bottom: 1px solid var(--text-color);
  margin-bottom: var(--size-bottom);
`;