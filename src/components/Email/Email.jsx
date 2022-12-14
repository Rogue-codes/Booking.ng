import React from "react";
import styled from "styled-components";

function Email() {
  return (
    <Container>
      <h1>Save time, save money!</h1>
      <p>Sign up and we'll send the best deals to you</p>
      <div className="inputContainer">
        <input type="text" name="" placeholder="Your email" id="" />
        <button>Subscribe</button>
      </div>
    </Container>
  );
}

export default Email;

const Container = styled.div`
  @media (max-width: 768px) {
    height: auto;
    padding: 5% 0%;
  }
  width: 100%;
  height: 40vh;
  background: #00224f;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  .inputContainer {
    @media (max-width: 768px) {
        width: 90%;
}
    width: 60%;
    margin-top: 2%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    input {
      @media (max-width: 768px) {
        font-size: 1rem;
      }
      width: 80%;
      height: 8vh;
      padding: 2%;
      font-size: 1.4vw;
      &:focus {
        outline: none;
      }
    }
    button {
        @media (max-width: 768px) {
        font-size: .8rem;
        width: 22%;
      }
      width: 18%;
      margin-left: 2%;
      height: 8vh;
      background: #0071c2;
      color: #fff;
      border: none;
      font-size: 1.5vw;
      cursor: pointer;
    }
  }
  h1{
    @media (max-width: 768px) {
    font-size: 1.7rem;
  }
}
`;
