import styled from "styled-components";
export function Contentheader({children}) {
  return (<Container>
{children}
  </Container>);
}
const Container =styled.div`
  width:100%;

  display:flex;
  align-items:center;
  position:relative;
  justify-content:end;
  background-color:red;
`