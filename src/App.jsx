import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className='cabecalho'>
        <nav className='container navbar navbar-expand'>
          <div className='logo' >
            <span className='navbar-brand'>logo</span>
          </div>
          <ul className='navbar-nav ms-auto'>
            <li className='nav-item'><a className='nav-link rosa' href="">Home</a></li>
            <li className='nav-item'><a className='nav-link rosa' href="">Sobre Nós</a></li>
            <li className='nav-item'><a className='nav-link rosa' href="">Contato</a></li>
          </ul>
        </nav>
      </header>
      <main className='conteudo pt-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-10 artigos p-4'>
              <h2>Artigos</h2>
              <div className='produtos container'>
                <div className='produto pb-3'>
               <h4>Body Splash- Maracujá</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                  Nobis a repellat praesentium sapiente blanditiis. Voluptates omnis porro totam, labore sequi modi, ratione in aperiam sit iure temporibus ipsum, nam atque.</p>
                  <button className='btn btn-warning'>Favoritar</button>
                  <button className='btn btn-success'>Comprar</button>
              </div>
              </div>
              <div className='produto pb-2'>
              <h4>Body Splash- Maracujá</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                  Nobis a repellat praesentium sapiente blanditiis. Voluptates omnis porro totam, labore sequi modi, ratione in aperiam sit iure temporibus ipsum, nam atque.</p>
                  <button className='btn btn-warning'>Favoritar</button>
                  <button className='btn btn-success'>Comprar</button>
              </div>
            </div>
           
            <div className='col-2 perfumaria'>
              <h3>Perfumaria</h3>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}



export default App;
