import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import AuthButton from "../../widgets/AuthButton";
function Nav() {
  return (
    <Container>
      <Logo>
        <Link to="/">
          Booking<span>.ng</span>
        </Link>
      </Logo>
      <Account>
        <AuthButton content="sign In" />
        <AuthButton content="sign Up" />
      </Account>
    </Container>
  );
}

export default Nav;

const Container = styled.nav`
  width: 100%;
  height: 15vh;
  background: #00224f;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2%;
  position: relative;
`;
const Logo = styled.div`
  font-size: 3vw;
  font-weight: 800;
  a {
    color: gold;
    text-decoration: none;
    span {
      color: #fff;
    }
  }
`;
const Account = styled.div`
  width: 20%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
