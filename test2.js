import React from 'react';
import './GithubButton.css';
//Can you move the style choices into a separate css file?
const GithubButton = () => {
  const redirectToGithub = () => {
    window.location.href = 'https://github.com/RebekahGrace4219';
  };

  return (
    <button className="github-button" onClick={redirectToGithub}>
      Git
    </button>
  );
};

export default GithubButton;
