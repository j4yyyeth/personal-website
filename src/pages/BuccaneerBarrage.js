import { useNavigate } from 'react-router-dom';

const BuccaneerBarrage = () => {

  const navigate = useNavigate();

  const goBack = () => {
    navigate('/')
  };

  return (
    <div className="proj-text">
      <button onClick={goBack} className="back-button">Back</button>
      <h1 className="title">Buccaneer Barrage</h1>
      <h3 className="subtitle">A pirate shooter game</h3>
      <h4 className="description">Buccaneer Barrage was my first ever project using vanilla javascript, html, css, and canvas. While building BB, I learned a lot about OOP, and it helped me nail down all of the fundamental principals of javascript. It also showed me how fun building canvas games can be, and whenever I need a refresher on OOP, I think building a game is great practice.</h4>
    </div>
  );
};

export default BuccaneerBarrage;