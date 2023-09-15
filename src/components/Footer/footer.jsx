import React from "react";
import styled from "styled-components";
import { Flex } from "../Header/Header";
import { Link } from "react-router-dom";
const Content = styled.footer`
  padding:100px 0px 40px 0px;
  background-color: #bb2339;
`;
const Box = styled(Flex)`
  flex-direction: column;
  gap: 80px;
`;
const Top = styled(Flex)`
  width: 100%;
  align-items: flex-start;
  justify-content: space-between;
`;
const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;
const Item = styled.li`
  color: #fff;
  font-family: Open Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px; /* 162.5% */
  letter-spacing: 0.64px;
`;
const Text = styled.p`
  color: #fff;
  font-variant-numeric: lining-nums tabular-nums;
  font-family: Open Sans;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%; /* 41.6px */
  letter-spacing: 1.28px;
  text-transform: capitalize;
`;
const Items = styled(Flex)`
  flex-direction: column;
  gap: 10px;
`;

const Social = styled(Flex)`
  gap: 16px;
`;
const Footer = () => {
  return (
    <Content>
      <div className="container">
        <Box>
          <Top>
            <List>
              <Text>Contact</Text>
              <Items>
                <Item>9 W 53rd St, London, NY 10019, UK</Item>
                <Item>+1 212-344-1230</Item>
                <Item>+1 212-555-1230</Item>
              </Items>
            </List>
            <List>
              <Text>Logo</Text>
              <Items>
                <Item
                  style={{
                    width: "438px",
                    textAlign: "center",
                  }}
                >
                  "The best way to find yourself is to lose yourself in the
                  service of others.”
                </Item>
              </Items>
              <Social>
                <Link>
                  <img src="a" alt="" />
                </Link>
                <Link>
                  <img src="a" alt="" />
                </Link>
                <Link>
                  <img src="a" alt="" />
                </Link>
              </Social>
            </List>
          </Top>
        </Box>
      </div>
    </Content>
  );
};

export default Footer;
