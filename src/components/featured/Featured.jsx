import React from "react";
import styled from "styled-components";
function Featured() {
  return (
    <Container>
      <Feature>
        <h1>Get inspiration for your next trip</h1>
        <Top>
          <Cards>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/f/f0/Moschee_in_der_Hauptstadt_Abuja.jpg"
              alt=""
            />
            <Text>
              <h1>Abuja</h1>
              <p>54 properties</p>
            </Text>
          </Cards>

          <Cards>
            <img
              src="https://guardian.ng/wp-content/uploads/2017/09/Lagos-City.jpg"
              alt=""
            />
            <Text>
              <h1>Lagos</h1>
              <p>147 properties</p>
            </Text>
          </Cards>
          <Cards>
            <img
              src="https://autojosh.com/wp-content/uploads/2020/08/onitsha-bridge-autojosh.jpg"
              alt=""
            />
            <Text>
              <h1>Onitsha</h1>
              <p>45 properties</p>
            </Text>
          </Cards>
        </Top>

        <Bottom>
          <CardsBtm>
            <img
              src="https://mytrip.ng/blog/wp-content/uploads/2021/01/Owerri.jpg"
              alt=""
            />
            <Text>
              <h1>Owerri</h1>
              <p>80 properties</p>
            </Text>
          </CardsBtm>
          <CardsBtm>
            <img
              src="https://buylandlagos.com/wp-content/uploads/2022/09/Best-Locations-for-Real-Estate-Investment-in-Rivers-State.jpg"
              alt=""
            />
            <Text>
              <h1>Port Harcourt</h1>
              <p>25 properties</p>
            </Text>
          </CardsBtm>
        </Bottom>
      </Feature>
    </Container>
  );
}

export default Featured;
const Container = styled.div`
  width: 100%;
  margin-top: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Feature = styled.div`
  width: 90%;
  height: auto;
  h1 {
    @media (max-width: 768px) {
      font-size: 1.8rem;
    }
  }
`;
const Top = styled.div`
  @media (max-width: 768px) {
    flex-wrap: wrap;
    height: auto;
  }
  width: 100%;
  margin-top: 2%;
  height: 50vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Bottom = styled.div`
  @media (max-width: 768px) {
    height: auto;
  }
  width: 100%;
  height: 50vh;
  margin-top: 2%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Cards = styled.div`
  @media (max-width: 768px) {
    min-width: 49%;
    height: 30vh;
    margin-top: 2%;
  }
  width: 32%;
  height: 100%;
  position: relative;
  overflow: hidden;
  border-radius: 15px;
  &:hover {
    img {
      scale: 1.05;
      transition: all 0.3s linear;
      border-radius: 15px;
    }
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.2s linear;
  }
`;
const CardsBtm = styled.div`
  @media (max-width: 768px) {
    min-width: 49%;
    height: 30vh;
  }
  width: 49%;
  height: 100%;
  overflow: hidden;
  position: relative;
  border-radius: 15px;
  &:hover {
    img {
      scale: 1.05;
      transition: all 0.3s linear;
      border-radius: 15px;
    }
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.2s linear;
  }
`;

const Text = styled.div`
  width: 100%;
  height: auto;
  background: linear-gradient(to top, transparent 0%, rgb(0, 0, 0, 0.3) 50%);
  color: #fff;
  position: absolute;
  padding: 2%;
  left: 0;
  bottom: 0;
  h1 {
    @media (max-width: 768px) {
      font-size: 1.2rem;
    }
    font-size: 1.8vw;
    font-weight: 800;
  }
  p {
    @media (max-width: 768px) {
      font-size: 1rem;
    }
    font-size: 1vw;
    font-weight: 500;
  }
`;
