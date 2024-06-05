
import Header from './components/Header';
import styled from 'styled-components';
import Pesquisa from './components/Pesquisa';


const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #002f52 35%, #326589 165%);

`
function App() {
  return (
    <AppContainer>
      <Header />
      <Pesquisa />
    </AppContainer>
  );
}

export default App;
