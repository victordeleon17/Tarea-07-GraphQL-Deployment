import './App.css'

const features = [
  {
    title: 'Seguimiento diario',
    description: 'Controla tus hábitos importantes y revisa tu progreso de forma clara.',
    icon: '📅',
  },
  {
    title: 'Metas inteligentes',
    description: 'Organiza objetivos realistas para estudiar, entrenar y mejorar tu rutina.',
    icon: '🎯',
  },
  {
    title: 'Dashboard visual',
    description: 'Consulta indicadores simples para saber cómo avanzas durante la semana.',
    icon: '📊',
  },
]

const habits = [
  { name: 'Ejercicio', progress: '92%', status: 'Excelente' },
  { name: 'Lectura', progress: '76%', status: 'En progreso' },
  { name: 'Estudio', progress: '88%', status: 'Constante' },
]

function App() {
  return (
    <main className="app">
      <section className="hero">
        <nav className="navbar">
          <div className="brand">
            <span className="brand-icon">HF</span>
            <span>HabitFlow</span>
          </div>

          <div className="nav-links">
            <a href="#features">Funciones</a>
            <a href="#dashboard">Panel</a>
            <a href="#deploy">Despliegue</a>
          </div>
        </nav>

        <div className="hero-content">
          <div className="hero-text">
            <p className="eyebrow">Organiza tu vida paso a paso</p>
            <h1>Construye mejores hábitos con una interfaz simple y moderna.</h1>
            <p className="hero-description">
              HabitFlow es una aplicación web estática creada con Vite y React.
              Permite visualizar hábitos, metas y progreso semanal desde una interfaz agradable.
            </p>

            <div className="hero-actions">
              <a className="primary-button" href="#dashboard">Ver dashboard</a>
              <a className="secondary-button" href="#features">Explorar funciones</a>
            </div>
          </div>

          <div className="dashboard-card" id="dashboard">
            <div className="dashboard-header">
              <div>
                <p>Progreso semanal</p>
                <h2>85%</h2>
              </div>
              <span className="badge">Activo</span>
            </div>

            <div className="progress-bar">
              <span></span>
            </div>

            <div className="habit-list">
              {habits.map((habit) => (
                <div className="habit-item" key={habit.name}>
                  <div>
                    <strong>{habit.name}</strong>
                    <p>{habit.status}</p>
                  </div>
                  <span>{habit.progress}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="features" id="features">
        <p className="section-label">Funciones principales</p>
        <h2>Una experiencia clara, rápida y agradable.</h2>

        <div className="feature-grid">
          {features.map((feature) => (
            <article className="feature-card" key={feature.title}>
              <span className="feature-icon">{feature.icon}</span>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="cta" id="deploy">
        <div>
          <p className="section-label">Proyecto preparado para despliegue</p>
          <h2>Aplicación lista para Docker, GitHub Actions y AWS Elastic Beanstalk.</h2>
        </div>
        <a className="primary-button" href="#dashboard">Revisar panel</a>
      </section>
    </main>
  )
}

export default App
