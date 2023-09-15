import React from "react";
import styled from "styled-components";
import { Flex } from "../Header/Header";
import Card from "./Card";
import { Link } from "react-router-dom";
const Content = styled.div`
  padding: 100px 0px;
  background-color: #fff;
`;
const Box = styled(Flex)`
  align-items: center;
  flex-direction: column;
  gap: 50px;
`;
const Cards = styled(Flex)`
  gap: 35px;
  align-items: flex-start;
`;
const Title = styled.h1`
  color: #bb2339;
  font-variant-numeric: lining-nums tabular-nums;
  font-family: Open Sans;
  font-size: 48px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%; /* 62.4px */
  letter-spacing: 1.44px;
  text-transform: capitalize;
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
  border: 2px solid #bb2339;
  cursor: pointer;
  transition: 0.8s;
  &:hover {
    transition: 0.8s;
    background-color: #bb2339;
    color: #fff;
  }
`;
const Index = () => {
  return (
    <Content>
      <Box>
        <Title>Metodlar</Title>
        <Cards>
          <Card text={"Baliq skeleti metodi"} />
          <Card text={"Sozli tassavur metodi"} />
          <Card text={"Loyxalar metodi"} />
        </Cards>
        <Link>
          <Btn>View More</Btn>
        </Link>
      </Box>
    </Content>
  );
};

export default Index;
