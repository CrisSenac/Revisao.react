import Logo from './components/Logo';
import './App.css';

import OptionsHeader from './components/OptionsHeader';
import IconesHeader from './components/IconesHeader';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
    <header className="App-header">
      <Logo /> 
      <OptionsHeader />
      <IconesHeader />
      <Header />
      </header>
      </div>
  );
}

export default App;
