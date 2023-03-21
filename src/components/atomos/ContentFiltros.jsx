import styled from "styled-components";
export function ContentFiltros({children}) {
  return (
    <Container>
      {children}
    </Container>
  );
}
const Container = styled.div`
   min-height:100px;
   position:relative;
  
   display:flex;
   justify-content:space-between;
   flex-wrap:wrap;
   align-items:center;
  
`;
