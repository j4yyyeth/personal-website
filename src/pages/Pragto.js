import { useNavigate } from 'react-router-dom';

const Pragto = () => {

  const navigate = useNavigate();

  const goBack = () => {
    navigate('/')
  }

  return (
    <div className="proj-text">
      <button onClick={goBack} className="back-button">Back</button>
      <h1 className="title">Pragto</h1>
      <h3 className="subtitle">A gamified to-do app</h3>
      <h4 className="description">
        Pragto was the first full stack web-app I built using the MERN stack, serving as a pivotal moment in my growth as a developer. It was here where I fully understood the connection between each MERN technology (MongoDB, Express.js, React, and Node.js). In the process, I also gained a wealth of knowledge about data modeling and key React concepts, enriching my understanding of how to structure and manage applications. Working on Pragto was not just a journey through learning new technologies, but also a unique opportunity to bring my creativity to life. It was exhilarating to see my idea translate into a practical solution from start to finish. Looking ahead with Pragto, I want to add a feature that supports team collaborations, providing an interactive and fun way for groups to manage their tasks. I am excited about incorporating more elements of gamification to make task management not just a necessity, but an enjoyable experience. Another aspect I am keen to explore is the concept of competitions, which could introduce an exciting competitive edge to everyday tasks. Overall, building Pragto was a significant milestone in my development journey, and I am eager to continue enhancing it in the future, pushing boundaries, learning, and growing as a developer.
      </h4>
    </div>
  );
};

export default Pragto;