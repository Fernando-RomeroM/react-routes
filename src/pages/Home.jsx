import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Welcome to my Portfolio</h1>
      <Link to="/projects">View Projects</Link>
      <Link to="/resume">View Resume</Link>
    </div>
  );
}

export default Home;
