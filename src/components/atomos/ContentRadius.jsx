import styled from "styled-components";
export function ContentRadius({
  children,
  height,
  width,
  radius,
  marginRight,
}) {
  return (
    <Container
      height={height}
      width={width}
      radius={radius}
      marginRight={marginRight}
    >
      {children}
    </Container>
  );
}
const Container = styled.div`
  height: ${(props) => props.height};
  min-height: ${(props) => props.height};
  width: ${(props) => props.width};
  min-width: ${(props) => props.width};

  
  border-radius: ${(props) => props.radius};
  margin-right: ${(props) => props.marginRight};
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;
