function App() {
  return (
    <div>
      <Tweet
        name="Jaqueline L"
        username="jaquelinl"
        date={new Date().toDateString()}
        message="Hello World!!"
      />
      <Tweet
        name="Guilherme c"
        username="cguilherme"
        date={new Date().toDateString()}
        message="I Love React"
      />
      <Tweet
        name="Arle"
        username="kraaelete"
        date={new Date().toDateString()}
        message="I love Cooking!"
      />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
