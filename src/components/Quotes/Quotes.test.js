import  { render, screen, fireEvent } from '@testing-library/react'; //Importando a biblioteca de testes
import { Quotes } from './Quotes'; // importando o nosso arquivo Quotes, onde se encontra nossos elementos

//Const criada para dar parametros ao nosso teste
const quote = 'test quote'; 
const speaker = 'random speaker';


//Teste
test('renders received quote, speaker and a button', () => {
  render(< Quotes quote ={quote} speaker={speaker} />);


  const quoteEl = screen.getByText(quote); //Esperamos que na tela, apareça alguma frase
  const speakerEl = screen.getByText( /-/i, {speaker}); //Um autor
  const buttonEl = screen.getByRole('button');//Um botão

  expect(quoteEl).toBeInTheDocument();
  expect(speakerEl).toBeInTheDocument();
  expect(buttonEl).toBeInTheDocument();
});


//Teste Callback, criando evento ao clicar  no button.
test('call a callback when button is pressed', () => {
  const callback = jest.fn(); 

  render(< Quotes quote ={quote} speaker={speaker} onUpdate={callback} />);

  const buttonEl = screen.getByRole('button');//Um botão

  fireEvent.click(buttonEl);

  expect(callback).toHaveBeenCalledTimes(1);
});


