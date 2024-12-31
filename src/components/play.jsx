import styled from 'styled-components';

const Button = () => {
  return (
    <StyledWrapper>
      <button>
        PLAY
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  button {
    background-color: #d0a933;
    color: #1f1347;
    font-size: 16px;
    font-weight: bold;
    padding: 15px 40px;
    border-radius: 2em;
    cursor: pointer;
    transition: 0.1s ease;
    border-width: 0;
    box-shadow: 1px 5px 0 0 #1f1347;
  }

  button:hover {
    transform: translateY(-4px);
    box-shadow: 1px 9px 0 0 #1f1347;
  }

  button:active {
    transform: translateY(4px);
    box-shadow: 0px 0px 0 0 #1f1347;
  }`;

export default Button;
