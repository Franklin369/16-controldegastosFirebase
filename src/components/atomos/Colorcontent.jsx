import styled from "styled-components";
export function Colorcontent({ alto, ancho, color, children }) {
  return (
    <Container alto={alto} ancho={ancho} color={color}>
      {children}
    </Container>
  );
}

export const Container = styled.div`
  display: flex;
  justify-content: center;
  min-height: ${(props) => props.alto};
  min-width: ${(props) => props.ancho};
  background-color: ${(props) => props.color};
  border-radius: 50%;
`;
