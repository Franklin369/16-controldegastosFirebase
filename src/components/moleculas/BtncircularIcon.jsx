import styled from "styled-components";
import { ContentIcon } from "../atomos/ContentIcon";
import { Icono } from "../atomos/Icono";
export function BtncircularIcon({
  width,
  height,
  bgcolor,
  textColor,
  fontsize,icono
}) {
  return (
    <ContentIcon
      bgcolor={bgcolor}
      textColor={textColor}
      height={height}
      width={width}
      fontsize={fontsize}
    >
      <Icono icono={icono}/>
    </ContentIcon>
  );
}
const Container = styled.div``;
