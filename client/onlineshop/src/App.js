import './App.css';
import { BrowserRouter } from 'react-router-dom'
import Footer from './components/Footer/footer';
import Header from './components/Header/header';
import Main from './components/Main/main';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Main/>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
