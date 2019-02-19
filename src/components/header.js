import React from "react";
import styled from "styled-components";

import { SettingsButton } from "./styles/customButtons";

import Container from "./styles/container";

const Header = props => (
  <HeaderWrapper>
    <HeaderContainer>
      <HeaderTitle onClick={props.clearOutputTable}>Выработка</HeaderTitle>
      <SettingsButton onClick={props.openSettings} />
    </HeaderContainer>
  </HeaderWrapper>
);

export default Header;

const HeaderWrapper = styled.header`
  background-color: #353a3f;
  margin-bottom: 1.5rem;
`;

const HeaderContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem 1.0875rem;
`;

const HeaderTitle = styled.h1`
  font-weight: lighter;
  font-size: 2rem;
  margin: 0;
  color: #fefefe;
  cursor: pointer;
`;
