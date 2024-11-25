import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Portfolio</h1>
        <nav>
          <ul>
            <li><a href="#about">Not About Me</a></li>
            <li><a href="#projects">Project</a></li>
          </ul>
        </nav>
      </header>
      <section id="about">
        <h2>About Me</h2>
        <p>This is a brief description about you.</p>
      </section>
      <section id="projects">
        <h2>Projects</h2>
        <p>Showcase some of your projects here.</p>
      </section>
    </div>
  );
}

export default App;
