import './App.css';
import { ButtonWrapper, UseState, Wrapper } from './components/UseState/UseState';


function App() {
  
  return (
    <Wrapper>
      <UseState />

      <ButtonWrapper>-</ButtonWrapper>
      <span>0</span>
      <ButtonWrapper>+</ButtonWrapper>
    </Wrapper>

  );
}

export default App;
