import styled from "styled-components";
import { Contentheader } from "../atomos/Contentheader";
import { Datauser } from "../organismos/Datauser";
import { ContentFiltros } from "../atomos/ContentFiltros";
import {Btndesplegable,Menudesplegable} from "../../index"

export function CategoriasTemplate({ children,datadesplegable }) {
  return (
    <Container>
      <Contentheader>
        <Datauser />
        
      </Contentheader>
      <ContentFiltros>
        <Btndesplegable inputColor="#21E295" textcolor="#fff" text="Categoria de ingresos"/>
        <Menudesplegable datadesplegable={datadesplegable}/>
       
      </ContentFiltros>


      {children}
    </Container>
  );
}
const Container = styled.div``;
