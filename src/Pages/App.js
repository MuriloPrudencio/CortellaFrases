import Styled from 'styled-components';
import React from 'react';
import CortellaImg from '../img/cortella.png';
import  Quotes  from '../components/Quotes/Quotes'

export const App = () => {
  return (
    <Content>
      <Quotes quote={'okay'} speaker={'speaker'}/>
      <ImgCortella src= {CortellaImg} alt='Cortella' />
    </Content>
  );
}


//Css = Styled components
const Content = Styled.div`
  height: 100vh;
  padding: 0 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`

//Inserindo e estilizando nossa Imagems
const ImgCortella  = Styled.img`
  max-width: 50vw;
  align-self: flex-end;
`

export default App
