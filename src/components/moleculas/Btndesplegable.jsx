import styled from "styled-components";
import { Icono } from "../atomos/Icono";
import {v} from "../../styles/Variables";
export function Btndesplegable({ inputColor, textcolor ,text,link,funcion}) {
  return (
    <a href={link} target="_blank">
       <Btn inputColor={inputColor} textcolor={textcolor} onClick={funcion}>
      <span className="containerText">
        <Icono icono={v.iconoFlechabajo}/>
         <h6>{text}</h6>
      </span>
     
    </Btn>
    </a>
   
  );
}
const Btn = styled.button`
  display: inline-block;
  background-color: ${(props) => props.inputColor};
  color: ${(props) => props.textcolor};
  outline:none;
  font-size:23px;
  padding: 0.9rem 2.3rem;
  border-radius:50px;
  font-weight: 500;
  border:none;
  cursor: pointer;
  
  .containerText{
    display:flex;
    justify-content: center;
    align-items: center;
  }
  :hover{
  background-color: rgba(77, 77, 77, 0.5);
 }


`;
