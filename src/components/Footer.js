const Footer = () => {
  return (
    <div id='footer'>
        <div>
        <a href="https://github.com/j4yyyeth" target="_blank" rel="noreferrer"><h4>Github</h4></a>
            <a href="https://github.com/j4yyyeth" target="_blank" rel="noreferrer"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="github" /></a>
        </div>
        <div>
            <a href="mailto:jstudyeth@gmail.com"><h4>Gmail</h4></a>
            <a href="mailto:jstudyeth@gmail.com"><img src={require('../gmail.png')} alt="gmail"/></a>
        </div>
        <div>
            <a href="https://www.linkedin.com/in/jacob-handwerger-a03798258/" target="_blank" rel="noreferrer"><h4>LinkedIn</h4></a>
            <a href="https://www.linkedin.com/in/jacob-handwerger-a03798258/" target="_blank" rel="noreferrer"><img src={require('../linkedIn.png')} alt="linkedIn"/></a>
        </div>
    </div>
  )
}

export default Footer;
