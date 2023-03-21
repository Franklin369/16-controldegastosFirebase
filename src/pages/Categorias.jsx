import styled from "styled-components";
import {CategoriasTemplate} from "../components/templates/CategoriasTemplate"
import {DataDesplegableIngreGastos} from "../utils/dataLocal"
export function Categorias() {
  return (<CategoriasTemplate datadesplegable={DataDesplegableIngreGastos}>
    
  </CategoriasTemplate>);
}
const Container =styled.div`
  
`