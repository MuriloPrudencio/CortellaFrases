import styled from 'styled-components';
import React from 'react';
import { string, func } from 'prop-types'; 
import Button from '../Button/Button';
//Quotes onde ficará armazenado as frases e autores

//Estamos criando uma destruction para chamar os filhos do nosso arquivo Quotes "quote e speaker"
// criados no nosso Teste
export const Quotes = ( {quote, speaker, onUpdate} ) => {
  return (
    <Wrapper>
      <Quote> {quote} </Quote>
      <Speaker > - {speaker} </Speaker>
      <Button onClick={onUpdate}>Seja você mesmo!</Button>
    </Wrapper>
  )
}

//Tipagem das nossas propriedades. => receberão somente String
Quotes.propTypes = {
  quote: string,
  speaker: string,
  onUpdate: func,
};

//Estilização da Div
const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`

//Estilização das frases
const Quote = styled.p `
  font-size: 2em;
  margin: 0;
`

//Estilização dos autores
const Speaker = styled(Quote)`
  text-align: right;
  margin-bottom: 50px;
`

export default Quotes