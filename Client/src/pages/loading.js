import React, {useState, useEffect} from 'react';
import '../stylesheets/loading.css';
import RingLoader from "react-spinners/RingLoader";

function App() {
  const [loading, setloading] = useState(false);

  useEffect(() => {
    setloading(true)
    setTimeout(() => {
      setloading(false)
    }, 8000)
  }, [])
  return (
    <div className="App">
      {
        loading?
        <RingLoader
        color={'green'}
        loading={loading}
        size={150}
        aria-label="Please Wait while we load data"
        data-testid="loader"
      />
        :
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      }
    </div>
  );
}

export default App;
