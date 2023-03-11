import styled from "styled-components";
export function ContentIcon({
  children,
  width,
  height,
  bgcolor,
  textColor,
  fontsize,
}) {
  return (
    <Container
      bgcolor={bgcolor}
      textColor={textColor}
      height={height}
      width={width}
      fontsize={fontsize}
    >
      {children} 
    </Container>
  );
}
const Container = styled.div`
  background-color: ${(props) => props.bgcolor};
  min-width: ${(props) => props.width};
  min-height: ${(props) => props.height};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    font-size: ${(props) => props.fontsize};
    text-align: center;
    color: ${(props) => props.textColor};
  }
`;
