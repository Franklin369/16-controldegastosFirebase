import styled from "styled-components";
export function SpanColap({ texto }) {
  return <Container>{texto}</Container>;
}
const Container = styled.span`
  width: 100%;
  font-weight: 500;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-wrap: break-word;
`;
