

import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Spinner = styled.div`
  border: 4px solid ${({ theme }) => theme.isLoader};  /* Theme-based color */
  border-top: 4px solid transparent;
  border-radius: 50%;
  width: 3.5rem;
  height: 3.5rem;
  animation: ${spin} 1s linear infinite;
`;

const Spin_loader = () => {
  return(
    <>
        <div className="d-flex justify-content-center py-5">
        <Spinner />;
      </div>  
    </>
  )
  
};

export default Spin_loader;

