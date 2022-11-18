import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
function AuthButton({ content,type }) {
  return (
    <Container
      whileHover={{
        scale: 1.2,
        transition: { duration: 0.5 },
      }}
      whileTap={{ scale: 0.9 }}
      width={type ==="nav" ? "100%" : "40%"}
    >
      {content}
    </Container>
  );
}

export default AuthButton;

const Container = styled(motion.button)`
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
  width: ${props => props.width};
  height: 6vh;
  cursor: pointer;
  font-size: 1.3vw;
  border-radius: 5px;
  border: none;
  background: #fff;
  font-weight: 700;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`;
