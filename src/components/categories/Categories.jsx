import React from "react";
import styled from "styled-components";

function Categories() {
  return (
    <Container>
      <h1>Browse by property type</h1>
      <Slider>
        <Card>
          <div className="top">
            <img
              src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/321441959.jpg?k=ce000a7ae2797d40e4d056b72c03fddf7e2c0c5c867a28b6df9253399dab17ea&o=&hp=1"
              alt=""
            />
          </div>
          <div className="bottom">
            <p>Hotels</p>
            <p>55</p>
          </div>
        </Card>
        <Card>
          <div className="top">
            <img
              src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/295090917.jpg?k=d17621b71b0eaa0c7a37d8d8d02d33896cef75145f61e7d96d296d88375a7d39&o=&hp=1"
              alt=""
            />
          </div>
          <div className="bottom">
            <p>Villa</p>
            <p>50</p>
          </div>
        </Card>
        <Card>
          <div className="top">
            <img
              src="https://cdn.ceoworld.biz/wp-content/uploads/2021/05/Soneva-Fushi.jpg"
              alt=""
            />
          </div>
          <div className="bottom">
            <p>Resorts</p>
            <p>5</p>
          </div>
        </Card>
        <Card>
          <div className="top">
            <img
              src="http://www.fletcherliving.co.nz/assets/Uploads/AO-2022-06-15-FLETCHER-LIVING-0005-Edit-v3__FillWzEyMDAsNjMwXQ.jpg"
              alt=""
            />
          </div>
          <div className="bottom">
            <p>Apartment</p>
            <p>35</p>
          </div>
        </Card>
        <Card>
          <div className="top">
            <img
              src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/04/48/58/df/mama-brasil-hostel.jpg?w=700&h=-1&s=1"
              alt=""
            />
          </div>
          <div className="bottom">
            <p>Hostels</p>
            <p>15</p>
          </div>
        </Card>
      </Slider>
    </Container>
  );
}

export default Categories;
const Container = styled.div`
  width: 100%;
  height: auto;
  h1 {
    @media (max-width: 768px) {
      font-size: 1.5rem;
      margin-bottom: 2%;
    }
    margin-top: 2%;
    margin-left: 5%;
  }
`;
const Slider = styled.div`
  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 2%;
  }
  width: 90%;
  height: auto;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1%;
`;
const Card = styled.div`
  @media (max-width: 768px) {
    min-width: 48%;
  }
  width: 20%;
  height: 35vh;
  border-radius: 12px;
  .top {
    width: 100%;
    height: 75%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 12px;
    }
  }
  .bottom {
    p {
      padding: 1% 2%;
    }
  }
`;
