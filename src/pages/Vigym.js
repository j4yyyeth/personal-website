import { useNavigate } from 'react-router-dom';

const Vigym = () => {

  const navigate = useNavigate();

  const goBack = () => {
    navigate('/')
  }

  return (
    <div className="proj-text">
      <button onClick={goBack} className="back-button">Back</button>
      <h1 className="title">ViGym</h1>
      <h3 className="subtitle">A full stack fitness web-app</h3>
      <h4 className="description">
        ViGym was the second MERN stack web-app I built, however, the project was an exploration into TypeScript. As I familiarized myself with types, interfaces, and the overall advantages of TypeScript, I developed an appreciation for the robustness and predictability it introduces into the software development process from start to finish. Simultaneously, I also embarked on my journey with Tailwind CSS. The utility-first CSS framework brought about a completely new perspective towards managing styles and designs while also ensuring a visually appealing UI. Using and integrating two incredible APIs (the OpenAI API and the exerciseDB API), I was able to harness them to let users view 1300+ exercises as well as adding an AI trainer, powered by OpenAI, that leverages user workout data to provide personalized fitness advice. In the pipeline, I am going to add an e-commerce section, as well as improve the AI trainer, ensuring it is even more attuned to individual fitness needs. Building ViGym has been an enriching blend of learning new technologies, applying them to real-world situations, and visualizing the exciting potential of the future
      </h4>
    </div>
  );
};

export default Vigym;