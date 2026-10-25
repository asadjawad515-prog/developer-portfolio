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
                <a
                    href="https://github.com/asadjawad515-prog"
                    target="_blank"
                    rel="noreferrer"
                >
                    Visit GitHub Profile
                </a>
            </header>

            <section id="about">
                <h2>About Me</h2>
                <p>
                    I am an IT student at Bahauddin Zakariya University and an aspiring frontend developer.
                    I build responsive web applications using React and am currently learning TypeScript.
                    I enjoy solving problems, improving user experiences, and developing practical projects
                    that strengthen my frontend development skills.
                </p>
            </section>


            
<section id="skills">
    <h2>Skills</h2>
    <p>Technologies I use and am currently learning:</p>

    <ul>
        <li>HTML5</li>
        <li>CSS3</li>
        <li>JavaScript (ES6+)</li>
        <li>React.js</li>
        <li>TypeScript</li>
        <li>React Hooks (useState, useEffect)</li>
        <li>React Router</li>
        <li>Context API</li>
        <li>CRUD Operations</li>
        <li>REST API Integration</li>
        <li>Search, Filtering and Sorting</li>
        <li>Drag-and-Drop with dnd-kit</li>
        <li>Browser localStorage</li>
        <li>Responsive Web Design</li>
        <li>Git and GitHub</li>
        <li>Vercel Deployment</li>
    </ul>
</section>


            <section id="projects">
                <h2>My Projects</h2>
                <p>Here are the projects I am building as a frontend developer.</p>
                <div className="project-card">
                    <h3>News Dashboard + Weather App</h3>
                    <p>
                        A responsive React application that displays weather information and news.
                        It uses API integration, search, category filtering, and reusable components.
                    </p>
                    <a href="https://news-weather-app-three.vercel.app/" target="_blank" rel="noreferrer">
                        Live Demo
                    </a>
                    <a href="https://github.com/asadjawad515-prog/news-weather-app" target="_blank" rel="noreferrer">
                        Source Code
                    </a>
                </div>
                
<div className="project-card">
    <h3>Task Management Dashboard</h3>
    <p>
        A responsive task management application built with React and TypeScript.
        It includes task creation and management, search and filters, Kanban
        drag-and-drop, analytics, and browser-based data persistence.
    </p>

    <a
        href="https://task-management-dashboard-one-tau.vercel.app/"
        target="_blank"
        rel="noreferrer"
    >
        Live Demo
    </a>

    <a
        href="https://github.com/asadjawad515-prog/task-management-dashboard"
        target="_blank"
        rel="noreferrer"
    >
        Source Code
    </a>
</div>

            </section>


            <section id="contact">
                <h2>Contact Me</h2>
                <p>
                    I am open to frontend internship opportunities where I can contribute,
                    learn from experienced developers, and grow my skills through practical work.
                </p>

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