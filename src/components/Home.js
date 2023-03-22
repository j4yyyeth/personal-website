import { HashLink } from 'react-router-hash-link';
const Home = () => {
    return (
      <div id="home">
      <div className='heading-txt'>
          <h1>Hi, I'm Jacob</h1>
          <div className='home-flex'>
            <h2>A full stack developer passionate about learning and building new things</h2>
            <HashLink className='contact-btn' to='#contact' smooth>Contact Me</HashLink>
          </div>
        </div>
        <img src={require('../pfp.jpg')} alt="pfp" />
      </div> 
    )
  }
  
  export default Home;