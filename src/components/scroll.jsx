import styled from 'styled-components';

const Button = () => {
  return (
    <StyledWrapper>
      <div className="scrolldown" style={{backgroundColor: 'skyblue'}}>
        <div className="chevrons">
          <div className="chevrondown" />
          <div className="chevrondown" />
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .scrolldown {
    --color: white;
    --sizeX: 50px;  // Adjusted for vertical size
    --sizeY: 30px;  // Adjusted for vertical size
    position: relative;
    width: var(--sizeX);
    height: var(--sizeY);
    margin-left: calc(var(--sizeX) / 2); // Centering horizontally
    border: calc(var(--sizeX) / 10) solid var(--color);
    border-radius: 50px;
    box-sizing: border-box;
    margin-bottom: 16px;
    cursor: pointer;
  }

  .scrolldown::before {
    content: "";
    position: absolute;
    top: 50%;  // Changed from bottom to top for vertical alignment
    left: 50%;
    width: 6px;
    height: 6px;
    margin-left: -3px;
    background-color: var(--color);
    border-radius: 100%;
    animation: scrolldown-anim 2s infinite;
    box-sizing: border-box;
    box-shadow: 0px 5px 3px 1px #2a547066;  // Adjusted shadow direction
  }

  @keyframes scrolldown-anim {
    0% {
      opacity: 0;
      height: 6px;
    }

    40% {
      opacity: 1;
      height: 10px;
    }

    80% {
      transform: translate(0, 20px); // Keep vertical movement
      height: 10px;
      opacity: 0;
    }

    100% {
      height: 3px;
      opacity: 0;
    }
  }

  .chevrons {
    padding: 0;
    margin-top: -6px;
    margin-left: -3px;
    width: 30px;
    display: flex;
    flex-direction: column; // Stack chevrons vertically
    align-items: center;
  }

  .chevrondown {
    margin-top: 6px; // Spacing between chevrons
    position: relative;
    border: solid var(--color);
    border-width: 0 3px 3px 0;
    display: inline-block;
    width: 10px;
    height: 10px;
    transform: rotate(45deg);
  }

  .chevrondown:nth-child(odd) {
    animation: pulse54012 500ms ease infinite alternate;
  }

  .chevrondown:nth-child(even) {
    animation: pulse54012 500ms ease infinite alternate 250ms;
  }

  @keyframes pulse54012 {
    from {
      opacity: 0;
    }

    to {
      opacity: 0.5;
    }
  }
`;

export default Button;
