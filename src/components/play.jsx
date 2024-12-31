import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = ({ onClick }) => {
  return (
    <StyledWrapper>
      <button onClick={onClick}>
        PLAY
      </button>
    </StyledWrapper>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,  
};

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
