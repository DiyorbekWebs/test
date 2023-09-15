import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { list } from "../../constant/header";

export const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: 0px;
`;
const Content = styled.header`
  padding: 26px 0px;
  background-color: #bb2339;
`;
const Box = styled(Flex)`
  width: 100%;
  justify-content: space-between;
`;
const List = styled.ul`
  display: flex;
  align-items: center;
  gap: 40px;
`;
const Item = styled.li`
  color: #fff;
  font-family: Open Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.64px;
  transition: 1s;
  &:hover {
    transition: 1s;
    color: #000;
  }
`;
const Logo = styled.div``;
const Header = () => {
  return (
    <Content>
      <div className="container">
        <Box>
          <Logo>Logo</Logo>
          <List>
            {list?.map((e) => (
              <Link key={e.id} to={e.path}>
                <Item>{e.text}</Item>
              </Link>
            ))}
          </List>
        </Box>
      </div>
    </Content>
  );
};

export default Header;
