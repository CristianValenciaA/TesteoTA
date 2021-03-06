import styled from "styled-components";
import { Link, Link as LinkR } from "react-router-dom";

// Contenedor del formulario

export const ContainerAll = styled.div`
  min-height: 200px;
  position: relative;
  bottom: 0;
  left: 0;
  right: 0;
  top: 10.5%;
  z-index: 0;
  overflow: hidden;
  background: #5ad8a8;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 2fr);
  grid-template-rows: auto;
  grid-gap: 1px;
  box-shadow: 1px 9px 30px -5px rgba(0, 0, 0, 0.9);
  padding-left: 8%;
`;

export const Grid2 = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: auto;
  grid-gap: 3px;
  box-shadow: rgba(0, 0, 0, 0.5);
  padding-top:5%;
  padding-bottom:10%;
  padding-right:10%;
  
`;

export const Wrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const Content = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const FormStyled = styled.form`
  background: #080808de;
  max-width: 200%;
  height: auto;
  width: 65%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 15px 25px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 1.9);
`;

// Campos del formulario, titulo, subtitulo, inputs, labels, etc

export const H1styled = styled.h1`
  font-family: "Encode Sans Expanded", sans-serif;
  color: #ffffff;
  margin-bottom: 2px;
`;

export const LabelStyled = styled.label`
  color: #ffffff;
  margin-bottom: -5px;
`;

export const InputStyled = styled.input`
  padding: 16px;
  margin-top: 5px;
  margin-bottom: 20px;
  border: none;
  border-radius: 3px;
  outline: none;
  padding-right: 0%;
`;

export const InputFile = styled.input.attrs({ type: 'file' })`
  color: #fff;
  cursor: pointer;
  margin-bottom: 0;
  text-transform: uppercase;
  width: 100%;
  border-radius: 5px;
  height: 35px;
  border-color: transparent;
  box-shadow: 0px;
  outline: none;
  transition: 0.15s;
  text-align: center;
  &:active {
    background-color: #f1ac15;
  }
`

export const ButtonStyled = styled.button`
  border-radius: 20px;
  justify-content: center;
  margin: 1px auto;
  cursor: pointer;
  border: none;
  padding: 10px;
  margin-top: 10px;

  &:hover {
    background: #7e8280;
    color: #ffffff;
  }
`;

export const Redir = styled(LinkR)`
  font-size: 10px;
  color: #ffffff;
  text-align: center;
  padding-top: 10px;
`;

export const IconStyled = styled(Link)`
  margin-left: 32px;
  margin-top: 32px;
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  font-size: 32px;
`;

export const ScrollContainer = styled.div`
    width: 100%;
    height: 500px;
    overflow-y: auto;
    position: relative;
    &::-webkit-scrollbar {
        width: 10px;
        border: 1px solid black;
        background:white;
    }
`;