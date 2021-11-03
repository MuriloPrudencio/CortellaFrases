import { createGlobalStyle } from "styled-components";
import backgroundImg from '../../img/bk.png'; //Imagem de Fundo => Corpo do site

//Estilização global
const GlobalStyled = createGlobalStyle`
body {
  background: url(${backgroundImg}) center no-repeat;
  margin: 0;
  padding: 0;
  font-family: 'New Tegomin', serif;
  color: #ffffff;
}
`

export default GlobalStyled