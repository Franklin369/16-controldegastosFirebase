import styled from "styled-components";
import {Colorcontent} from "../atomos/Colorcontent"
export function ItemDesplegable({color,text}) {
  return (
    <Container>
      <Colorcontent color={color} alto="12px" ancho="12px"/>
      <span>{text}</span>
    </Container>
  );
}
const Container = styled.div`
  cursor: pointer;
  padding: 8px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  &:hover{
    background-color:${({theme})=>theme.bg4};
  }

`;
