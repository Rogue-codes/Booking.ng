import { motion } from "framer-motion";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaBed, FaTaxi, FaPizzaSlice } from "react-icons/fa";
import { MdOutlineFlightTakeoff, MdDownhillSkiing } from "react-icons/md";
import { AiFillCar } from "react-icons/ai";
import AuthButton from "../../widgets/AuthButton";
function Nav() {
  const [clicked, setClicked] = useState(false);
  const [showWrapper, setshowWrapper] = useState(false);
  const toggleMenu = () => {
    setClicked(!clicked);
    setshowWrapper(!showWrapper);
  };

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%", transition: { delay: 2.5 } },
  };
  const backdropVariants = {
    open: { opacity: 1 },
    closed: { opacity: 0, transition: { duration: 0.5 } },
  };
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
      <div
        className={
          clicked
            ? "hamburger hamburger--spring is-active"
            : "hamburger hamburger--spring"
        }
        onClick={toggleMenu}
      >
        <div class="hamburger-box">
          <div class="hamburger-inner"></div>
        </div>
      </div>
      <Backdrop
        variants={backdropVariants}
        animate={showWrapper ? "open" : "closed"}
        onClick={()=>setshowWrapper(false)}
      >
        <Wrapper animate={showWrapper ? "open" : "closed"} variants={variants}>
          <HeaderItems className="active">
            <FaBed size="1.52rem" />
            <p>stays</p>
          </HeaderItems>
          <HeaderItems>
            <MdOutlineFlightTakeoff size="1.52rem" />
            <p>Flight</p>
          </HeaderItems>
          <HeaderItems>
            <AiFillCar size="1.52rem" />
            <p>Car Rentals</p>
          </HeaderItems>
          <HeaderItems>
            <MdDownhillSkiing size="1.52rem" />
            <p>Attractions</p>
          </HeaderItems>
          <HeaderItems>
            <FaTaxi size="1.52rem" />
            <p>Airport Taxis</p>
          </HeaderItems>
          <HeaderItems>
            <FaPizzaSlice size="1.52rem" />
            <p>Restuarant</p>
          </HeaderItems>
          <AccountMobile>
        <AuthButton content="sign In" type="nav"/>
        <AuthButton content="sign Up" type="nav" />
      </AccountMobile>
        </Wrapper>
      </Backdrop>
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
  .hamburger{
    @media (max-width: 768px) {
      display: block;
    }
    display: none;
  }
  .hamburger-box {
    width: 40px;
    height: 24px;
    position: relative;
    cursor: pointer;
  }

  .hamburger-inner {
    display: block;
    top: 50%;
    margin-top: -2px;
  }
  .hamburger-inner,
  .hamburger-inner::before,
  .hamburger-inner::after {
    width: 40px;
    height: 4px;
    background-color: #fff;
    border-radius: 4px;
    position: absolute;
    transition-property: transform;
    transition-duration: 0.15s;
    transition-timing-function: ease;
  }
  .hamburger-inner::before,
  .hamburger-inner::after {
    content: "";
    display: block;
  }
  .hamburger-inner::before {
    top: -10px;
  }
  .hamburger-inner::after {
    bottom: -10px;
  }
  .hamburger--spring .hamburger-inner {
    top: 2px;
    transition: background-color 0s 0.13s linear;
    /* color: #fff; */
  }
  .hamburger--spring .hamburger-inner::before {
    top: 10px;
    transition: top 0.1s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1),
      transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  .hamburger--spring .hamburger-inner::after {
    top: 20px;
    transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1),
      transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  .hamburger--spring.is-active .hamburger-inner {
    transition-delay: 0.22s;
    background-color: transparent !important;
  }
  .hamburger--spring.is-active .hamburger-inner::before {
    top: 0;
    transition: top 0.1s 0.15s cubic-bezier(0.33333, 0, 0.66667, 0.33333),
      transform 0.13s 0.22s cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 10px, 0) rotate(45deg);
  }
  .hamburger--spring.is-active .hamburger-inner::after {
    top: 0;
    transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333),
      transform 0.13s 0.22s cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 10px, 0) rotate(-45deg);
  }
`;
const Logo = styled.div`
  @media (max-width: 768px) {
    font-size: 2rem;
  }
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
  @media (max-width: 768px) {
    display: none;
  }
  width: 20%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Wrapper = styled(motion.div)`
  width: 80%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  background: #00224f;
  z-index:999999999;
`;
const HeaderItems = styled.div`
  width: 80%;
  height: 12vh;
  margin-left: 2%;
  display: flex;
  justify-content: flex-start;
  gap: 10%;
  align-items: center;
  padding: 0.5%;
  color: #fff;
  p {
    font-size: 1.5rem;
    font-weight: 500;
  }
`;

const Backdrop = styled(motion.div)`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: #060606d6;
`;
const AccountMobile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15%!important;
  height: 20vh;
  justify-content: flex-start;
  padding: 2%;
`