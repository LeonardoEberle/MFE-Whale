import './App.css'

function App() {
  return (
    <main>
      <header className="brand">
        <div className="brand__logo">🐋 Whale</div>
        <nav className="brand__nav">
          <a href="#recursos">Recursos</a>
          <a href="#como-funciona">Como funciona</a>
          <a href="https://main.d2a82veqkndbjb.amplifyapp.com/" className="btn btn--sm">Login</a>
        </nav>
      </header>

      <section className="hero">
        <h1>Acompanhe seu patrimônio em moedas virtuais</h1>
        <p className="hero__subtitle">
          Consolide saldos, veja cotações em tempo real e monitore a evolução da sua
          carteira de criptoativos em um só lugar.
        </p>
        <div className="hero__actions">
          <a href="https://main.d2a82veqkndbjb.amplifyapp.com/" className="btn btn--primary">Criar carteira</a>
          <a href="#recursos" className="btn btn--ghost">Explorar recursos</a>
        </div>
      </section>

      <section id="recursos" className="features">
        <h2>Por que usar o Whale Wallet?</h2>
        <div className="features__grid">
          <article className="feature">
            <div className="feature__icon">📊</div>
            <h3>Visão consolidada</h3>
            <p>Veja o valor total da sua carteira, somando múltiplas moedas e contas.</p>
          </article>
          <article className="feature">
            <div className="feature__icon">⚡</div>
            <h3>Cotações em tempo real</h3>
            <p>Preços atualizados das principais moedas para decisões rápidas e informadas.</p>
          </article>
          <article className="feature">
            <div className="feature__icon">🔔</div>
            <h3>Alertas inteligentes</h3>
            <p>Receba notificações quando o preço atingir metas ou limites definidos.</p>
          </article>
        </div>
      </section>

      <section id="como-funciona" className="how">
        <h2>Como funciona</h2>
        <ol className="how__steps">
          <li>
            <strong>Verifique seu saldo</strong> — Altere a quantidade de cada moeda possuida.
          </li>
          <li>
            <strong>Acompanhe desempenho</strong> — Veja em tempo real a variação dos seus ativos.
          </li>
          <li>
            <strong>Receba alertas</strong> — seja avisado sobre flutuações de moedas.
          </li>
        </ol>
      </section>

      <section id="cta" className="cta">
        <h2>Pronto para acompanhar sua carteira?</h2>
        <p>Crie sua carteira e tenha clareza total sobre seus criptoativos.</p>
        <a className="btn btn--primary btn--lg" href="https://main.d2a82veqkndbjb.amplifyapp.com/">Começar agora</a>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Whale. Todos os direitos reservados.</p>
      </footer>
    </main>
  )
}

export default App
