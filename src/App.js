import './App.css';
import Header from './components/Header';
import MainPart from './components/MainPart';
import Menu from './components/Menu';

function App() {
  return (
    <div className="App">
      <Menu />
      <Header />
      <MainPart />
    </div>
  );
}

export default App;
