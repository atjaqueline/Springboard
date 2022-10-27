const MadLibStory = ({ madStory, submitted }) => {
    return <h2 className={submitted ? null : "hidden"}>{madStory}</h2>;
  };
  export default MadLibStory;