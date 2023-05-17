import { Navigate, useNavigate } from 'react-router-dom';

const Vigym = () => {

  const navigate = useNavigate();

  const goBack = () => {
    navigate('/')
  }

  return (
    <div className="proj-text">
      <button onClick={goBack} className="back-button">Back</button>
      <h1 className="title">Vigym</h1>
      <h3 className="subtitle">A full stack fitness web-app</h3>
      <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vehicula lectus vitae justo semper, at condimentum nisl semper.</p>
    </div>
  );
};

export default Vigym;