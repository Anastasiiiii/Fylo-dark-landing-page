import './App.css';
import Header from './components/Header';
import MainPart from './components/MainPart';
import Menu from './components/Menu';

function App() {
  return (
    <div className="App">
      <Menu />
      <Header />
      <div>
        <MainPart />
      </div>
    </div>
  );
}

export default App;
