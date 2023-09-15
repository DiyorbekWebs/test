import React from "react";
import styled from "styled-components";
const Content = styled.div`
  padding: 20px 20px 30px 20px;
  background-color: #fff;
  width: 310px;
  height: 360px;
  flex-shrink: 0;
  border-radius: 14px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 30px;
  justify-content: flex-start;
  transition: 1s;
  cursor: pointer;

  &:hover {
    transition: 1s;
    background: #f5f4f4;
    backdrop-filter: blur(4px);
  }
`;
const Text = styled.p`
  width: 230px;
  color: #242424;
  text-align: center;
  font-family: Open Sans;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const Img = styled.img`
  width: 200px;
  height: 200px;
  background-size: 100%;
`;
const Card = ({ text, img }) => {
  return (
    <Content>
      <Img src={img} alt="" />
      <Text>{text}</Text>
    </Content>
  );
};

export default Card;
