/* const Person = ( {name, age} ) => {
    const canVote = age > 18;
    const hobbies = [];
    return (
        <div>
            <p>Learn some information about this person</p>
            <h3>{ canVote ? "Please, go vote!" : "you must be over 18"}</h3>
            <ul>
            { hobbies.map(h => <li>{h}</li>) }
            </ul>
        </div>
    );
  } */


  function Person(props) {
    let voteText = props.age >= 18 ? "Go vote!" : "Go study!";
  
    let hobbies = props.hobbies.map(hobby => <li>{hobby}</li>);
  
    return (
      <div>
        <p>Learn some information about this person:</p>
        <ul>
          <li>Name: {props.name.slice(0, 6)}</li>
          <li>Age: {props.age}</li>
          <ul>
            Hobbies
            {hobbies}
          </ul>
        </ul>
        <h3>{voteText}</h3>
      </div>
    );
  }