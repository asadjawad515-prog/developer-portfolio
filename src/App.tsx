import './App.css';
function App() {

      return (



            <div>
            
      <nav>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>

        <header className='hero'>   
            <h1>Asad Jawad</h1>    
            <h2>Frontend Developer | React & TypeScript</h2>









                        <p>I build clean, responsive web experiences using React and TypeScript.</p>
                              <a href="#projects">View My Projects</a>
                                    <a href="https://github.com/asadjawad515-prog">GitHub</a>
                                    </header>
                                    
      <section id="about">
        <h2>About Me</h2>
        <p>
          I am an aspiring frontend developer and an IT student at Bahauddin Zakariya University.
          I enjoy building responsive web applications using React and learning TypeScript.
          My goal is to create user-friendly websites and continue improving my development skills.
        </p>
      </section>

               
      <section id="skills">
        <h2>Skills</h2>
        <p>Technologies I use and am currently learning:</p>

        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>TypeScript (Learning)</li>
          <li>Git and GitHub</li>
          <li>API Integration</li>
          <li>Responsive Web Design</li>
        </ul>
      </section>
 
      <section id="projects">
        <h2>My Projects</h2>
        <p>Here are the projects I am building as a frontend developer.</p>
<div className="project-card">
        <h3>News Dashboard + Weather App</h3>
        <p>A React application that displays news and weather information.</p>
        <a href="https://news-weather-app-three.vercel.app/" target="_blank" rel="noreferrer">
          Live Demo
        </a>
        <a href="https://github.com/asadjawad515-prog/news-weather-app" target="_blank" rel="noreferrer">
          Source Code
        </a>
</div>
<div className="project-card">
        <h3>Task Management Dashboard</h3>
        <p>A task management project currently in development using React and TypeScript.</p>
</div>
      </section>


      <section id="contact">
        <h2>Contact Me</h2>
        <p>I'm open to frontend internship opportunities and learning experiences.</p>

        <a href="mailto:asadjawad515@gmail.com">Email Me</a>

        <a
          href="https://www.linkedin.com/in/asad-jawad-890317443"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </section>

      <footer>
        <p>© 2026 Asad Jawad. All rights reserved.</p>
        <a
          href="https://github.com/asadjawad515-prog"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </footer>
            </div>
              );
              }
              export default App;