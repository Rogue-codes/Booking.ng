import React, { useState } from "react";
import styled from "styled-components";
import { MdLocationOn } from "react-icons/md";
import Email from "../../components/Email/Email";
import Header from "../../components/header/Header";
import {AiFillCloseCircle,AiFillLeftCircle,AiFillRightCircle} from 'react-icons/ai'
function Hotel() {
  const Image = [
    {
      src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/406831842.jpg?k=16c3b1c079b497a852c8ea05e6724442e8b23e7bb9a65b10be2d679730e19abf&o=&hp=1",
    },
    {
      src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/406835979.jpg?k=df69dad066e5b385f42d92fd365ffbbe8e1acd70f6bfcf54bea6694d82411381&o=&hp=1",
    },
    {
      src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/406835855.jpg?k=3236d81a04f9144409d19053f5016ae89b1f00c5b661195151b3389214a6fefc&o=&hp=1",
    },
    {
      src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/406835870.jpg?k=bf192fe182928c1f7818e345074975f944a448bc2c79f7edbcb3f6403374ec1f&o=&hp=1",
    },
    {
      src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/406843200.jpg?k=0886ec03df74b48db43e805d2d48cd6d548633a01b340e81dede1516fa4163d8&o=&hp=1",
    },
    {
      src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/406832943.jpg?k=63ae723a38baa4683b5303f246e3a2270450933dc4f32252ee62ccec6c9aee9d&o=&hp=1",
    },
  ];

  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const handleOpen = (i) => {
    setIndex(i);
    setOpen(true);
  };
  const handleSlide = (d) => {
    let newIndex;

    if (d === "l") {
      newIndex = index === 0 ? 5 : index - 1;
    } else {
      newIndex = index === 5 ? 0 : index + 1;
    }

    setIndex(newIndex)
  }
  return (
    <Container>
      <Header type="list" />
      {open && (
        <Slider>
          <AiFillLeftCircle cursor="pointer" className="icons" onClick={()=>handleSlide("l")}/>
          <ImageContainer>
            <img src={Image[index].src} alt="" />
          </ImageContainer>
          <AiFillRightCircle cursor="pointer" className="icons"  onClick={()=>handleSlide("r")}/>
          <AiFillCloseCircle className="close" onClick={()=>setOpen(false)} />
        </Slider>
      )}
      <Wrapper>
        <Top>
          <Desc>
            <p className="name">De Rembrandt Hotels and Suites</p>
            <p className="location">
              <MdLocationOn size="1.52rem" />
              172 Obafemi Awolowo Way, 023401 Ikeja, Nigeria
            </p>
          </Desc>
          <Reserve>
            <button>Reserve or book now</button>
          </Reserve>
        </Top>
        <Mid>
          {Image.map((item, i) => (
            <Card>
              <img src={item.src} alt="" onClick={() => handleOpen(i)} />
            </Card>
          ))}
        </Mid>
        <Bottom>
          <About>
            <h1>Stay in the heart of Ikeja</h1>
            <p>
              Cozy 1-bedroom flat apartment with free wifi is set in Ikeja, 2.6
              km from Kalakuta Museum, 12 km from National Stadium Lagos, as
              well as 15 km from National Art Theatre. There is an in-house
              restaurant, plus free private parking and free WiFi are available.
            </p>
            <p>
              This air-conditioned apartment is fitted with 1 bedroom, a
              flat-screen TV, a dining area, and a kitchen with a microwave and
              a fridge. Towels and bed linen are offered. Central Mosque of
              Lagos is 18 km from the apartment, while Apapa Amusement Park is
              18 km from the property. The nearest airport is Murtala Muhammed
              International Airport, 8 km from Cozy 1-bedroom flat apartment
              with free wifi. Cozy 1-bedroom flat apartment with free wifi has
              been welcoming Booking.com guests since 11 Nov 2022.
            </p>
          </About>
          <Book>
            <button>Reserve or book now</button>
          </Book>
        </Bottom>
      </Wrapper>
      <Email />
    </Container>
  );
}

export default Hotel;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
`;
const Wrapper = styled.div`
  width: 90%;
  margin: auto;
  margin-bottom: 5%;
  position: relative;
`;
const Top = styled.div`
  width: 100%;
  height: auto;
  display: flex;
`;
const Mid = styled.div`
  width: 100%;
  height: auto;
  padding: 2%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;
const Bottom = styled.div`
    @media (max-width: 768px) {
      flex-direction: column;
    }
  width: 100%;
  height: auto;
  margin-top: 2%;
  display: flex;
  padding: 2%;
  align-items: flex-start;
  justify-content: center;
`;
const Desc = styled.div`
    @media (max-width: 768px) {
      flex: 2;
    }
  flex: 3;
  height: 100%;
  padding: 2%;
  .name {
    @media (max-width: 768px) {
      font-size: 1.2rem;
    }
    font-size: 2vw;
    font-weight: 800;
  }
  .location {
    @media (max-width: 768px) {
      font-size: .7rem;
    }
    display: flex;
    align-items: center;
    gap: 1%;
    margin-top: 2%;
  }
`;
const Reserve = styled.div`
    @media (max-width: 768px) {
      flex: 2;
    }
  flex: 1;
  height: 100%;
  button {
    @media (max-width: 768px) {
      font-size: .8rem;
      width: 100%;
      margin: 8% 0%;
    }
    width: 70%;
    margin: 5% 25%;
    height: 8vh;
    border: none;
    cursor: pointer;
    background: #00224f;
    color: #fff;
    font-size: 1.4vw;
  }
`;
const Card = styled.div`
  width: 33%;
  height: 40vh;
  margin-top: 1%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const About = styled.div`
  flex: 3;
  padding: 1%;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px,
    rgb(209, 213, 219) 0px 0px 0px 1px inset;
  h1 {
    @media (max-width: 768px) {
      font-size: 1.2rem;
    }
    font-size: 2vw;
  }
  p {
    @media (max-width: 768px) {
      font-size: 1.2rem;
    }
    font-size: 1.2vw;
    line-height: 30px;
  }
`;
const Book = styled.div`
    @media (max-width: 768px) {
      width: 100%;
    }
  flex: 1;
  button {
    @media (max-width: 768px) {
      width: 100%;
    margin: 5% 0%;
    font-size: 1rem;
    }
    width: 70%;
    margin: 5% 25%;
    height: 8vh;
    border: none;
    cursor: pointer;
    background: #00224f;
    color: #fff;
    font-size: 1.4vw;
  }
`;
const Slider = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.613);
  z-index: 999;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .close {
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 2.5rem;
    color: white;
    cursor: pointer;
    &:hover {
      color:#e4dbdb;
    }
  }
  .icons{
    font-size: 3rem;
    color: white;
    cursor: pointer;
    &:hover {
      color:#e4dbdb;
    }
  }
`;
const ImageContainer = styled.div`
  width: 80%;
  height: 80%;
  background: white;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
