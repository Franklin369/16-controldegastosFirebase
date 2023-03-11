import styled from "styled-components";
import {Contentheader} from "../atomos/Contentheader"
import { Datauser } from "../organismos/Datauser";
export function CategoriasTemplate({ children }) {
  return (
    <Container>
    <Contentheader>
      <Datauser/>
      <Datauser/>
    </Contentheader>
      {children}
    </Container>
  );
}
const Container = styled.div``;
