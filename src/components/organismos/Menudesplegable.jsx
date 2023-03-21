import styled from "styled-components";
import { ContentMenuDespleg } from "../atomos/ContentMenuDespleg";
import { ItemDesplegable } from "../moleculas/ItemDesplegable";
export function Menudesplegable({ datadesplegable }) {
  return (
    <ContentMenuDespleg top="85%">
      {datadesplegable.map((item, index) => {
        return <ItemDesplegable color={item.color} text={item.text} />;
      })}
    </ContentMenuDespleg>
  );
}
const Container = styled.div``;
