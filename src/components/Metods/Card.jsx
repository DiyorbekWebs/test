import React from "react";
import styled from "styled-components";
import { Flex } from "../Header/Header";
const Content = styled(Flex)`
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  border-radius: 14px;
  border: 1px solid rgba(36, 36, 36, 0.1);
  background: #fff;
`;
const Img = styled.img`
  width: 410px;
  height: 352px;
  flex-shrink: 0;
  border-radius: 14px;
 
`;
const Text = styled.p`
  padding: 0px 20px 20px 20px;
  color: #242424;
  font-variant-numeric: lining-nums tabular-nums;
  font-family: Open Sans;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px; /* 133.333% */
  text-transform: capitalize;
`;
const Card = ({img,text}) => {
  return (
    <Content>
      <Img src={img}/>
      <Text>{text}</Text>
    </Content>
  );
};

export default Card;
