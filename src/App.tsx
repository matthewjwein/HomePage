import './App.css';
import React from 'react'
import Blog from './components/Blog'

function App(): JSX.Element {
  return (
    <div className="App">
      <header className="App-header">
        <p className="Introduction">
          Under Construction 🚧
        </p>
        <p className="Introduction">
          I'm developing a project a week, starting with this website to showcase these projects.
        </p>
        <p className="Introduction">
          Check back again soon for updates.
        </p>
      </header>
      <Blog />
    </div>
  );
}

export default App;
