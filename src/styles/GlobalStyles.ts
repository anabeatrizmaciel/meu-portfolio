import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap');

  body {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    background-color: #2a2d34;
    color: #e6e6e6;
    overflow-x: hidden;
  }

  h1, h2, h3 {
    color: #e6e6e6;
  }

  section {
    padding: 80px 20px;
    margin-top: 20px;
    transition: all 0.5s ease-in-out;
  }

  h1, h2 {
    font-weight: 600;
  }

  h3, h4 {
    font-weight: 500;
  }

  p {
    font-weight: 300;
    font-size: 1.1em;
    line-height: 1.6;
  }

  section {
    opacity: 0;
    animation: fadeIn 1s forwards;
  }

  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }
`;

export default GlobalStyles;
