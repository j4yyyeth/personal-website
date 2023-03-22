const Projects = () => {
  return (
    <div id="projects">
      <div id="all-proj">
        <div className="proj-card">
        <h1>Pragto</h1>
          <img src={require("../pragto.jpg")} alt="pragto"/>
          <p>A gamified to-do app</p>
          <a href="https://google.com" target="_blank" rel="noreferrer">Link</a>
        </div>
        <div className="proj-card">
        <h1>Pragto</h1>
          <img src={require("../pragto.jpg")} alt="pragto"/>
          <p>A gamified to-do app</p>
          <a href="https://google.com" target="_blank" rel="noreferrer">Link</a>
        </div>
        <div className="proj-card">
        <h1>Pragto</h1>
          <img src={require("../pragto.jpg")} alt="pragto"/>
          <p>A gamified to-do app</p>
          <a href="https://google.com" target="_blank" rel="noreferrer">Link</a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
