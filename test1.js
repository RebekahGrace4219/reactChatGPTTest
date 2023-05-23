import React from 'react';

/* Can you now make a me a React component that will click a green button labeled Git and send the user to my Github Page? 
My username is RebekahGrace4219
*/

const GithubButton = () => {
  const redirectToGithub = () => {
    window.location.href = 'https://github.com/RebekahGrace4219';
  };

  return (
    <button
      style={{
        backgroundColor: 'green',
        color: 'white',
        padding: '10px 20px',
        fontSize: '16px',
        borderRadius: '4px',
        border: 'none',
        cursor: 'pointer',
      }}
      onClick={redirectToGithub}
    >
      Git
    </button>
  );
};

export default GithubButton;

/* ChatGPT notes:
Make sure to replace 'https://github.com/RebekahGrace4219' with your actual GitHub page URL. When the "Git" button is clicked, it will redirect the user to your GitHub page. You can also customize the button's style by modifying the style prop in the button element.

*/
