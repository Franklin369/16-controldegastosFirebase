import styled from "styled-components";
import { ImageCircular } from "../moleculas/ImageCircular";
import {SpanColap} from "../atomos/SpanColap"
import {BtncircularIcon} from "../moleculas/BtncircularIcon"
import {v} from "../../styles/Variables"
export function Datauser() {
  return (
    <Container>
      <ImageCircular height="40px" width="40px" radius="50%" marginRight="20px"/>
      <div className="btncorona">
          <BtncircularIcon icono={v.iconocorona} width="20px" height="20px" bgcolor="#fff" fontsize="11px" textColor="#181616"/>
      </div>
    
      <SpanColap texto="frankkkkkkkkkkkkkkkkkkkkkyuuyu"/>
      <BtncircularIcon icono={v.iconoFlechabajo} width="30px" height="30px"/>

     
    </Container>
  );
}
const Container = styled.div`
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  border-radius: 50px;
  &:hover {
    background-color: ${({ theme }) => theme.bg3};
  }
  .btncorona{
    position:absolute;
    transform: translateX(-50px) translateY(-12px)

  }
  
`;
