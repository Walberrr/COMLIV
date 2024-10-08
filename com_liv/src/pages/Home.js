import '../Styles/Home.css';

const Home = () => {
  return (
    <div className="home">
      <header>
        <h1>ComLiv</h1>
        <nav>
          <a href="/">Nutrir</a>
          <a href="/pessoas">Pessoas</a>
          <a href="/livros">Livros</a>
        </nav>
        <div>
          <a href="/cadastrar" className="registro-link">Cadastrar</a>
          <button>Entrar</button>
        </div>
      </header>
      <main>
        <p className="clubinar">
            Clubinar é só no ComLiv
            <br>
            </br>
            Vem ser ComLiv também.
            <br></br>
            <button className="botão-club">clubinar</button>
        </p>
      </main>
      <footer>
        <p>© 2024 COMLIV. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default Home;
