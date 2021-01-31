import React from "react";
import styled from "styled-components";
import { WelcomeCard, Title, SubTitle, Description } from "./Elements";

const Logo = styled.img`
  display: block;
  width: 100px;
  border-radius: 10px;
`;

export default () => (
  <WelcomeCard>
    <div>
      <Logo src="/MessnoteLogo.png" alt="Messnote logo" />
      <Title color="#bbb">Messnoter</Title>
      {/* <SubTitle color="#999">Note like a messenger</SubTitle> */}
    </div>
    <div>
      <Description />
      <Description />
      <Description />
    </div>
  </WelcomeCard>
);
