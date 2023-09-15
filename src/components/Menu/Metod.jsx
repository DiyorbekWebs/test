import React from "react";
import styled from "styled-components";
import { Flex } from "../Header/Header";
import Card from "./Card";
import { menuInfo } from "../../constant/menu";
const Content = styled.div`
  background: #f8f8f8;
  padding: 120px 0px;
`;
const Box = styled(Flex)`
  align-items: flex-start;
  gap: 40px;
  flex-direction: column;
`;
const Title = styled.h1`
  color: #bb2339;
  font-family: Cera Round Pro;
  font-size: 48px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 1.44px;
  text-transform: capitalize;
`;
const Cards = styled(Flex)`
  align-items: flex-start;
  gap: 40px;
`;
const Metod = () => {
  return (
    <Content>
      <div className="container">
        <Box>
          <Title>Menu</Title>
          <Cards>
            {menuInfo?.map((e) => (
              <Card img={e.img} text={e.text} />
            ))}
          </Cards>
        </Box>
      </div>
    </Content>
  );
};

export default Metod;
