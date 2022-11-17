import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Header from "../../components/header/Header";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import { BsPlusLg } from "react-icons/bs";
import { AiOutlineMinus } from "react-icons/ai";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { motion } from "framer-motion";

function HotelList() {
  const location = useLocation();

  const [destination, setDestination] = useState(location.state.searchVal);
  const [date, setDate] = useState(location.state.date);
  const [option, setOption] = useState(location.state.option);
  const [showDate, setShowDate] = useState(false);
  const [showOption, setShowOption] = useState(false);
  const [active, setActive] = useState(false);

  const toggleOptions = () => {
    setActive(!active);
    setShowOption(!showOption);
  };

  const add = (name, operation) => {
    setOption((prev) => {
      return {
        ...prev,
        [name]:
          operation === "i"
            ? option[name] + 1
            : option[name] > 0
            ? option[name] - 1
            : (option[name] = 0),
      };
    });
  };
  console.log(location);
  return (
    <div>
      <Header type="list" />
      <Container>
        <Search>
          <h1>search</h1>
          <span className="label">Destination/property name:</span>
          <input
            type="text"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            placeholder={destination}
          />
          <span className="label">check in date:</span>
          <span
            onClick={() => setShowDate(!showDate)}
            className="date"
          >{`${format(date[0].startDate, "MM/dd/yyyy")} (To)  ${format(
            date[0].endDate,
            "MM/dd/yyyy"
          )}`}</span>
          {showDate && (
            <DateRange
              editableDateInputs={true}
              onChange={(item) => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              minDate={new window.Date()}
              ranges={date}
              className="dateBox"
            />
          )}
          <span className="label">select options:</span>
          <span
            className={active ? "option active" : "option"}
            onClick={toggleOptions}
          >
            <p>{option.adult} Adult</p> • <p>{option.children} Children</p> •{" "}
            <p>{option.room} room</p>
          </span>
          {showOption && (
            <Options
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <Select>
                <Left>Adults</Left>
                <Right>
                  <button onClick={() => add("adult", "d")}>
                    <AiOutlineMinus />
                  </button>
                  <p>{option.adult}</p>
                  <button onClick={() => add("adult", "i")}>
                    <BsPlusLg />
                  </button>
                </Right>
              </Select>
              <Select>
                <Left>Children</Left>
                <Right>
                  <button onClick={() => add("children", "d")}>
                    <AiOutlineMinus />
                  </button>
                  <p>{option.children}</p>
                  <button onClick={() => add("children", "i")}>
                    <BsPlusLg />
                  </button>
                </Right>
              </Select>
              <Select>
                <Left>Room</Left>
                <Right>
                  <button onClick={() => add("room", "d")}>
                    <AiOutlineMinus />
                  </button>
                  <p>{option.room}</p>
                  <button onClick={() => add("room", "i")}>
                    <BsPlusLg />
                  </button>
                </Right>
              </Select>
            </Options>
          )}
          <button className="search">search</button>
        </Search>
        <Results>
          <Result>
            <Image>
              <img
                src="https://t-cf.bstatic.com/xdata/images/hotel/square600/383729473.webp?k=5e9b174d1b3dfdcfb06b4b79788de12b7d374d1c16614aefe71e309e91ba8f38&o=&s=1"
                alt=""
              />
            </Image>
            <Description>
              <div className="name">
                Cozy 1-bedroom flat apartment with free wifi
              </div>
              <p>Ikeja</p>
              <div className="details">
                <h1>Single Room</h1>
                <p>1 double bed</p>
                <p>breakfast included</p>
              </div>
            </Description>
            <Review>
              <Score>
                <div className="review-score">Review score</div>
                <div className="rating">6.1</div>
              </Score>
              <Price>
                <p>NGN 39,000</p>
                <span>Includes taxes and charges</span>
              </Price>
              <Availability>See availability</Availability>
            </Review>
          </Result>
        </Results>
      </Container>
    </div>
  );
}

export default HotelList;
const Container = styled.div`
  width: 90%;
  margin: auto;
  /* border: 5px solid #000; */
  display: flex;
  gap: 2%;
  padding: 2%;
  position: relative;
`;
const Search = styled.div`
  flex: 1px;
  height: auto;
  background: gold;
  position: sticky;
  border-radius: 10px;
  top: 10px;
  .dateBox {
    margin: 1% 5%;
    /* position: absolute; */
  }
  h1 {
    font-size: 1.6vw;
    font-weight: 500;
    margin-left: 5%;
  }
  .label {
    font-size: 1vw;
    margin-left: 5%;
  }
  .date {
    cursor: pointer;
    padding: 5%;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 90%;
    margin: 0 auto;
    margin-bottom: 2%;
  }
  .search {
    width: 50%;
    margin: 5% 25%;
    height: 8vh;
    border: none;
    cursor: pointer;
    background: #00224f;
    color: #fff;
    font-size: 1.4vw;
  }
  input {
    display: block;
    width: 90%;
    margin: auto;
    height: 8vh;
    font-size: 1.4vw;
    padding: 2%;
    margin-bottom: 2%;
    border: none;
    &:focus {
      outline: 2px solid #00224f;
    }
  }
  .option {
    width: 90%;
    margin: auto;
    display: flex;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5%;
    padding: 5%;
    background: white;
    /* margin-top: 5%; */
  }
  .option.active {
    border: 2px solid #00224f;
    border-radius: 0px;
  }

  .options {
    width: 30%;
    height: auto;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
    position: absolute;
    top: 50px;
    padding: 2% 0%;
    font-size: 1.2vw;
    background: #fff;
    z-index: 9090999;
  }
`;
const Options = styled(motion.div)`
  min-width: 80%;
  height: auto;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  position: absolute;
  top: 250px;
  left: 35px;
  padding: 2% 0%;
  color: black;
  font-size: 1.2vw;
  background: #fff;
  z-index: 9090999;
`;
const Select = styled.div`
  width: 100%;
  height: 8vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Left = styled.div`
  width: 40%;
  height: 8vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Right = styled.div`
  width: 60%;
  height: 8vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  button {
    width: 40px;
    height: 70%;
    border: 1px solid #00224f;
    background: white;
  }
`;
const Results = styled.div`
  width: 67%;
  height: 40vh;
  margin-top: 2%;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px,
    rgb(209, 213, 219) 0px 0px 0px 1px inset;
`;
const Result = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 2%;
`;
const Image = styled.div`
  height: 100%;
  flex: 1;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const Description = styled.div`
  height: 100%;
  flex: 2;
  padding: 2%;
  .details {
    border-left: 1px solid grey;
    margin-top: 5%;
    padding: 2%;
    h1 {
      font-size: 1.3vw;
    }
  }
`;
const Review = styled.div`
  height: 100%;
  flex: 1;
`;
const Score = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2%;
  .rating {
    padding: 4%;
    background: #22004f;
    color: #fff;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`;
const Price = styled.div`
  width: 100%;
  height: 30%;
  padding: 2%;
  margin-top: 5%;
  p {
    font-weight: 700;
  }
  span {
    font-size: 1vw;
  }
`;
const Availability = styled.button`
  width: 90%;
  margin-left: 5%;
  margin-top: 5%;
  height: 22%;
  border: none;
  background: #00224f;
  color: #fff;
`;
