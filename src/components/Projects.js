import { Link } from "react-router-dom";

const Projects = () => {

  const twoLinks = (link1, link2) => {
    window.open(link1, "_blank");
    window.open(link2, "_blank");
  }

  return (
    <div id="projects">
      <div id="all-proj">
        <div className="proj-card">
        <h2>Pragto</h2>
          <img className="proj-img" src={require("../pragto.jpg")} alt="pragto"/>
          <p>A gamified to-do app</p>
          <div className="proj-links">
            <a href="https://pragto.netlify.app" target="_blank" rel="noreferrer"><img className="web-img" src={require("../internet.png")} alt="website"/></a>
            <button className="transparent-btn" onClick={()=>twoLinks('https://github.com/j4yyyeth/pragto-client' , 'https://github.com/j4yyyeth/pragto-server')}><img className="git-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="github" /></button>
          </div>
          <div className="tech-used">
            <p>Javascript</p>
            <p>React</p>
            <p>NodeJs</p>
            <p>Express</p>
            <p>MongoDB</p>
            <p>CSS</p>
          </div>
        </div>
        <div className="proj-card">
        <h2>Pragto</h2>
          <img className="proj-img" src={require("../pragto.jpg")} alt="pragto"/>
          <p>A gamified to-do app</p>
          <div className="proj-links">
            <a href="https://google.com" target="_blank" rel="noreferrer"><img className="web-img" src={require("../internet.png")} alt="website"/></a>
            <a href="https://google.com" target="_blank" rel="noreferrer"><img className="git-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="github" /></a>
          </div>
          <div className="tech-used">
            <p>Javascript</p>
            <p>React</p>
            <p>NodeJs</p>
            <p>Express</p>
            <p>MongoDB</p>
            <p>CSS</p>
          </div>
        </div>
        <div className="proj-card">
        <h2>Pragto</h2>
          <img className="proj-img" src={require("../pragto.jpg")} alt="pragto"/>
          <p>A gamified to-do app</p>
          <div className="proj-links">
            <a href="https://google.com" target="_blank" rel="noreferrer"><img className="web-img" src={require("../internet.png")} alt="website"/></a>
            <a href="https://google.com" target="_blank" rel="noreferrer"><img className="git-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="github" /></a>
          </div>
          <div className="tech-used">
            <p>Javascript</p>
            <p>React</p>
            <p>NodeJs</p>
            <p>Express</p>
            <p>MongoDB</p>
            <p>CSS</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
