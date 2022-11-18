import React, { useState } from "react";
import styled from "styled-components";
import { FaBed, FaTaxi, FaPizzaSlice } from "react-icons/fa";
import { MdOutlineFlightTakeoff, MdDownhillSkiing } from "react-icons/md";
import { AiFillCar, AiOutlineMinus } from "react-icons/ai";
import { SlCalender } from "react-icons/sl";
import { BsPlusLg } from "react-icons/bs";
import { GiPerson } from "react-icons/gi";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
function Header({ type }) {
  const [searchVal, setSearchVal] = useState("");
  let start = new window.Date();
  const [date, setDate] = useState([
    {
      startDate: start,
      endDate: new window.Date(),
      key: "selection",
    },
  ]);
  const [showDate, setShowDate] = useState(false);
  const [showOption, setShowOption] = useState(false);
  const [option, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });
  const add = (name, operation) => {
    setOptions((prev) => {
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

  const navigate = useNavigate();

  const handlesearch = () => {
    navigate("/hotels", { state: { searchVal, option, date } });
  };
  return (
    <Container>
      <Heading>
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
      </Heading>
      {type !== "list" && (
        <>
          <HeaderBanner>
            <h2>A lifetime discount? It's genius</h2>
            <p>
              Get rewarded fro your travels- unlock instant savings of 10% or
              more with a free <span>Booking</span>
              <span id="dot">.ng</span> account
            </p>
            <button>signIn/signUp</button>
          </HeaderBanner>
          <HeaderSearch>
            <Search>
              <FaBed size="1.52rem" color="grey" />{" "}
              <input
                type="text"
                value={searchVal}
                onChange={(e) => setSearchVal(e.target.value)}
                placeholder="Where are you going"
              />
            </Search>
            <Date>
              <SlCalender
                size="1.52rem"
                color="grey"
                cursor="pointer"
                onClick={() => setShowDate(!showDate)}
              />{" "}
              <p>{`${format(date[0].startDate, "MM/dd/yyyy")} (To)  ${format(
                date[0].endDate,
                "MM/dd/yyyy"
              )}`}</p>
              {showDate && (
                <DateRange
                  editableDateInputs={true}
                  onChange={(item) => setDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  minDate={new window.Date()}
                  ranges={date}
                  className="date"
                />
              )}
            </Date>
            <Category>
              <GiPerson size="1.52rem" color="grey" />
              <span>
                <p onClick={() => setShowOption(!showOption)}>
                  {option.adult} Adult
                </p>{" "}
                •{" "}
                <p onClick={() => setShowOption(!showOption)}>
                  {option.children} Children
                </p>{" "}
                •{" "}
                <p onClick={() => setShowOption(!showOption)}>
                  {option.room} room
                </p>
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
            </Category>

            <button className="submit" onClick={handlesearch}>
              search
            </button>
          </HeaderSearch>
          <HeaderSearchMobile>
            <div className="input">
              <input
                type="text"
                value={searchVal}
                onChange={(e) => setSearchVal(e.target.value)}
                placeholder="Where are you going"
              />
            </div>

            <div className="datee">
              <span onClick={() => setShowDate(!showDate)}>
                {format(date[0].startDate, "MM/dd/yyyy")}
              </span>
              <span onClick={() => setShowDate(!showDate)}>
                {format(date[0].endDate, "MM/dd/yyyy")}
              </span>
              {showDate && (
                <DateRange
                  editableDateInputs={true}
                  onChange={(item) => setDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  minDate={new window.Date()}
                  ranges={date}
                  orientation="horizontal"
                  className="dateMobile"
                />
              )}
            </div>

            <div className="options">
              <span>
                <p onClick={() => setShowOption(!showOption)}>
                  {option.adult} Adult
                </p>{" "}
                •{" "}
                <p onClick={() => setShowOption(!showOption)}>
                  {option.children} Children
                </p>{" "}
                •{" "}
                <p onClick={() => setShowOption(!showOption)}>
                  {option.room} room
                </p>
              </span>
              {showOption && (
                <OptionsMobile
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
                </OptionsMobile>
              )}
            </div>

            <button className="submitMobile" onClick={handlesearch}>
              search
            </button>
          </HeaderSearchMobile>
        </>
      )}
    </Container>
  );
}

export default Header;
const Container = styled.div`
  @media (max-width: 768px) {
    background: white;
  }
  width: 100%;
  background: #00224f;
  position: relative;
`;
const Heading = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
  width: 100%;
  height: 20vh;
  background: #00224f;
  display: flex;
  justify-content: flex-start;
  gap: 2%;
  align-items: center;
  padding: 2%;
`;
const HeaderItems = styled.div`
  width: 11%;
  height: 6vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 0.5%;
  color: #fff;
  p {
    font-size: 1.2vw;
    font-weight: 500;
  }
`;

const HeaderBanner = styled.div`
  @media (max-width: 768px) {
    padding: 5% 2%;
    height: auto;
  }
  width: 100%;
  height: 40vh;
  padding: 0% 2%;
  background: #00224f;
  color: #fff;
  h2 {
    @media (max-width: 768px) {
      font-size: 2rem;
    }
    font-size: 2vw;
    font-weight: 500;
    margin-top: 2%;
  }
  p {
    @media (max-width: 768px) {
      font-size: 1.2rem;
      margin-top: 3%;
      width: 100%;
    }
    margin-top: 1%;
    width: 40%;
    font-size: 1.5vw;
    font-weight: 500;
    span {
      color: gold;
    }
    #dot {
      color: #fff;
    }
  }
  button {
    @media (max-width: 768px) {
      font-size: 1.2rem;
      width: 45%;
      margin-top: 5%;
    }
    margin-top: 2%;
    width: 15%;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    height: 8vh;
    cursor: pointer;
    font-size: 1.5vw;
    color: #000;
    border-radius: 5px;
    border: none;
    background: #fff;
    font-weight: 700;
  }
`;

const HeaderSearch = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
  width: 90%;
  height: 10vh;
  border: 4px solid gold;
  border-radius: 5px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  left: 5%;
  bottom: -6%;
  background: #fff;
  color: grey;
  .submit {
    width: 10%;
    margin-right: 2%;
    height: 6vh;
    color: white;
    background: #00224f;
    border: none;
    font-size: 1.2vw;
    border-radius: 5px;
    cursor: pointer;
  }
`;
const Search = styled.div`
  width: 30%;
  height: 6vh;
  display: flex;
  justify-content: center;
  gap: 3%;
  align-items: center;
  input {
    width: 80%;
    height: 100%;
    border: none;
    color: #000;
    font-size: 1.5vw;
    &:focus {
      outline: none;
    }
    &::placeholder {
      color: grey;
      font-size: 1.5vw;
    }
  }
`;
const Date = styled.div`
  width: 30%;
  height: 6vh;
  display: flex;
  justify-content: center;
  gap: 3%;
  align-items: center;
  z-index: 999;
  .date {
    position: absolute;
    top: 50px;
    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
      rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
      rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
  }
`;
const Category = styled.div`
  width: 30%;
  height: 6vh;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  span {
    width: 80%;
    display: flex;
    justify-content: flex-start;
    gap: 3%;
    align-items: center;
  }
`;

const Options = styled(motion.div)`
  width: 20%;
  height: auto;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  position: absolute;
  top: 50px;
  padding: 2% 0%;
  color: black;
  font-size: 1.2vw;
  background: #fff;
  z-index: 9090999;
`;
const Select = styled.div`
  @media (max-width: 768px) {
    font-size: 1.2rem;
    font-weight: 800;
  }
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

const HeaderSearchMobile = styled.div`
  display: none;
  width: 95%;
  margin: auto;
  padding: 5% 2%;
  background: gold;
  margin-top: 5%;
  @media (max-width: 768px) {
    display: block;
  }
  .input {
    width: 100%;
    margin: auto;
    input {
      width: 100%;
      padding: 2%;
      height: 8vh;
      border: none;
      color: #000;
      font-size: 1.5rem;
      &:focus {
        outline: none;
      }
      &::placeholder {
        color: grey;
        font-size: 1rem;
      }
    }
  }
  .datee {
    width: 100%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 3%;
    position: relative;
    span {
      width: 48%;
      height: 8vh;
      background: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .dateMobile {
    position: absolute;
    background: #fff;
    top: 80px;
    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
      rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
      rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
  }
  .options {
    width: 100%;
    margin: auto;
    margin-top: 3%;
    background: #fff;
    height: 8vh;
    display: flex;
    align-items: center;
    padding: 5%;
    span {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
  .submitMobile {
    width: 100%;
    height: 8vh;
    color: white;
    background: #00224f;
    border: none;
    font-size: 1.2rem;
    margin-top: 5%;
    cursor: pointer;
  }
`;
const OptionsMobile = styled.div`
  width: 80%;
  height: auto;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  position: absolute;
  top: 90%;
  padding: 2% 0%;
  color: black;
  font-size: 1.2vw;
  background: #fff;
  z-index: 9090999;
`;
