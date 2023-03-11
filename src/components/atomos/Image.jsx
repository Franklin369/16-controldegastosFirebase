import styled from "styled-components";
export function Image({ source, altText }) {
  return <Imagen src={source} alt={altText} className="imagen" />;
}
const Imagen = styled.img`
  width: 100%;
  object-fit:cover;
`;
