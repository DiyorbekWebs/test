import React from "react";
import { Flex } from "../Header/Header";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Player } from "../../assets/img";
const Content = styled.div`
  padding: 100px 0px;
  background-color: #f4f4f4;
`;
const Box = styled(Flex)`
  flex-direction: column;
  gap: 60px;
  align-items: center;
  justify-content: center;
`;
const Title = styled.p`
  color: #242424;
  font-variant-numeric: lining-nums tabular-nums;
  font-family: Open Sans;
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%; /* 62.4px */
  letter-spacing: 1.44px;
  text-transform: capitalize;
`;
const Cards = styled(Flex)`
  gap: 35px;
  align-items: flex-start;
`;
const Card = styled(Flex)`
  width: 410px;
  height: 198px;
  justify-content: center;
  border-radius: 20px;
  border: 1px solid rgba(51, 51, 51, 0.1);
  background: #fff;
`;
const PlayerImg = styled.img`
  width: 100px;
  height: 100px;
`;
const Btn = styled.div`
  color: #242424;
  font-family: Open Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 175%; /* 28px */
  letter-spacing: 0.64px;
  padding: 8px 32px;
  border-radius: 100px;
  border: 2px solid #000000;
  cursor: pointer;
  transition: 0.8s;
  &:hover {
    transition: 0.8s;
    background-color: #000000;
    color: #fff;
  }
`;
const Video = () => {
  return (
    <Content>
      <div className="container">
        <Box>
          <Title>Videolar</Title>
          <Cards>
            <Link
              to={"https://youtu.be/jLNrvmXboj8?si=m84cVojQE4oAIX3X"}
              target={"_blank"}
            >
              <Card>
                <PlayerImg src={Player} />
              </Card>
            </Link>{" "}
            <Link
              to={"https://youtu.be/jLNrvmXboj8?si=m84cVojQE4oAIX3X"}
              target={"_blank"}
            >
              <Card>
                <PlayerImg src={Player} />
              </Card>
            </Link>{" "}
            <Link
              to={"https://youtu.be/jLNrvmXboj8?si=m84cVojQE4oAIX3X"}
              target={"_blank"}
            >
              <Card>
                <PlayerImg src={Player} />
              </Card>
            </Link>
          </Cards>
          <Link>
            <Btn>View More</Btn>
          </Link>
        </Box>
      </div>
    </Content>
  );
};

export default Video;
