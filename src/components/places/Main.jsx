import React from "react";
import styled from "styled-components";
function Main() {
  return (
    <Container>
      <h1>Homes guest love</h1>
      <MainContainer>
        <Card>
          <Top>
            <img
              src="https://t-cf.bstatic.com/xdata/images/hotel/max1280x900/306907978.jpg?k=5fece0444fca1ad9b98f9c95aa9c30bf34616d872e27e27f73ccd2d6284cbb95&o=&hp=1"
              alt=""
            />
          </Top>
          <Bottom>
            <p className="name">Msquare Hotel</p>
            <p className="loction">Ikeja</p>
            <p className="name">starting from $2500</p>
            <div className="rating">
              <button>8</button>
              <p>excellent</p>
            </div>
          </Bottom>
        </Card>
        <Card>
          <Top>
            <img
              src="https://t-cf.bstatic.com/xdata/images/hotel/max1280x900/383729408.jpg?k=f2f74ee847be64ed1c03ca96dd5e32b2c80e719b8f668e54e892bf6c6236ad50&o=&hp=1"
              alt=""
            />
          </Top>
          <Bottom>
            <p className="name">Msquare Hotel</p>
            <p className="loction">Ikeja</p>
            <p className="name">starting from $2500</p>
            <div className="rating">
              <button>8</button>
              <p>excellent</p>
            </div>
          </Bottom>
        </Card>
        <Card>
          <Top>
            <img
              src="https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/306909856.jpg?k=41999d90ee42c24438e9f8951fbb13e35227cfe32309725e8a313d64737b15cb&o=&hp=1"
              alt=""
            />
          </Top>
          <Bottom>
            <p className="name">Msquare Hotel</p>
            <p className="loction">Ikeja</p>
            <p className="name">starting from $2500</p>
            <div className="rating">
              <button>8</button>
              <p>excellent</p>
            </div>
          </Bottom>
        </Card>
        <Card>
          <Top>
            <img
              src="https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/383729473.jpg?k=4bbb5dad6ef18b7e53917235b789730ee232c86b85fe620e18c94fef565420a5&o=&hp=1"
              alt=""
            />
          </Top>
          <Bottom>
            <p className="name">Msquare Hotel</p>
            <p className="loction">Ikeja</p>
            <p className="name">starting from $2500</p>
            <div className="rating">
              <button>8</button>
              <p>excellent</p>
            </div>
          </Bottom>
        </Card>
      </MainContainer>
    </Container>
  );
}

export default Main;

const Container = styled.div`
  @media (max-width: 768px) {
    min-height: auto;
  }
  width: 100%;
  min-height: auto;
  margin-bottom: 5%;
  h1 {
    @media (max-width: 768px) {
      font-size: 1.2rem;
    }
    margin-left: 5%;
    margin-top: 2%;
  }
`;
const MainContainer = styled.div`
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Card = styled.div`
  @media (max-width: 768px) {
    min-width: 49%;
    margin-bottom: 4%;
  }
  width: 23%;
  height: auto;
  margin-top: 2%;
`;
const Top = styled.div`
  width: 100%;
  height: 70%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const Bottom = styled.div`
  width: 100%;
  height: 30%;
  padding-left: 3%;
  .name {
    @media (max-width: 768px) {
      font-size: 1rem;
    }
    font-weight: 800;
    font-size: 1.3vw;
  }
  .rating {
    width: 100%;
    margin-top: 2%;
    height: auto;
    display: flex;
    justify-content: flex-start;
    padding-left: 1%;
    gap: 2%;
    align-items: center;
    button {
      @media (max-width: 768px) {
        width: 19%;
      }
      height: 5vh;
      width: 10%;
      box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
        rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
      border: none;
      background: #00224f;
      color: white;
      border-radius: 5px;
    }
  }
`;
