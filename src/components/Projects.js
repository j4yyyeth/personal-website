const Projects = () => {
  return (
    <div id="projects">
      <div id="all-proj">
        <div className="proj-card">
        <h1>Pragto</h1>
          <img className="proj-img" src={require("../pragto.jpg")} alt="pragto"/>
          <p>A gamified to-do app</p>
          <div className="proj-links">
            <a href="https://google.com" target="_blank" rel="noreferrer"><img className="web-img" src={require("../internet.png")} alt="website"/></a>
            <a href="https://google.com" target="_blank" rel="noreferrer"><img className="git-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="github" /></a>
          </div>
        </div>
        <div className="proj-card">
        <h1>Pragto</h1>
          <img className="proj-img" src={require("../pragto.jpg")} alt="pragto"/>
          <p>A gamified to-do app</p>
          <div className="proj-links">
            <a href="https://google.com" target="_blank" rel="noreferrer"><img className="web-img" src={require("../internet.png")} alt="website"/></a>
            <a href="https://google.com" target="_blank" rel="noreferrer"><img className="git-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="github" /></a>
          </div>
        </div>
        <div className="proj-card">
        <h1>Pragto</h1>
          <img className="proj-img" src={require("../pragto.jpg")} alt="pragto"/>
          <p>A gamified to-do app</p>
          <div className="proj-links">
            <a href="https://google.com" target="_blank" rel="noreferrer"><img className="web-img" src={require("../internet.png")} alt="website"/></a>
            <a href="https://google.com" target="_blank" rel="noreferrer"><img className="git-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="github" /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
