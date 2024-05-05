import './App.css';
import Header from './components/header/Header';
import Hero from './components/hero/Hero'
import Features from './components/features/Features'
import About from './components/about/About'
import Products from './components/products/Products'


function App() {
  return (
    <div className="App">
      <header>
      <Header/>
      </header>
      <main>
      <Hero/>
      <Features/>
      <About/>
      <Products/>
      </main>
    </div>
  );
}

export default App;
