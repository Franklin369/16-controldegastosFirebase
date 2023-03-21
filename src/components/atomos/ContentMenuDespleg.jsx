import styled from "styled-components";
import {v} from "../../styles/Variables"
export function ContentMenuDespleg({ children ,top}) {
  return <Container top={top}>{children}</Container>;
}
const Container = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.bg3};
  position:absolute;
  border-radius:22px;
  box-shadow:${v.boxshadowGray};
  z-index:1;
  top:${(props)=>props.top};
`;
