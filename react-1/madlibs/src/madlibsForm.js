import React, { useState } from "react";

const MadLibForm = ({ createStory, submitted }) => {
  const INITIAL_STATE = {
    noun1: "",
    noun2: "",
    color: "",
    adjective: "",
  };
  const [formData, setFormData] = useState(INITIAL_STATE);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // call fn passed in as prop to process form data
    createStory({ ...formData });
    setFormData(INITIAL_STATE);
  };
  return (
    <form className={submitted ? "hidden" : null} onSubmit={handleSubmit}>
      <input
        required
        id="noun1"
        type="text"
        name="noun1"
        placeholder="Noun"
        onChange={handleChange}
      />
      <br />
      <input required id="noun2" type="text" name="noun2" placeholder="Noun" onChange={handleChange}/>
      <br />
      <input required id="color" type="text" name="color" placeholder="Color" onChange={handleChange}/>
      <br />
      <input required id="adjective" type="text" name="adjective" placeholder="Adjective" onChange={handleChange}/>
      <br />
      <button>Get story!</button>
    </form>
  );
};
export default MadLibForm;