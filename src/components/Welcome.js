import React from "react";
import styled from "styled-components";
import { WelcomeCard, Title, SubTitle, Description } from "./Elements";

const Logo = styled.img`
  display: block;
  width: 100px;
  height: 100px;
  border-radius: 10px;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
`;

export default () => (
  <WelcomeCard>
    <div>
      <Logo src="/messnote.png" alt="Messnote logo" />
      <Title>Messnoter</Title>
      <SubTitle>Note like a messenger</SubTitle>
    </div>
    <div>
      <Description>
        I usually messeage to my self to note something or when I need to copy
        something to other devices.
      </Description>
      <Description>
        So I create this app to note faster and more familar than message apps.
      </Description>
      <Description>
        You can find code here at{" "}
        <a href="https://github.com/fozg/fozg.net-fast-note">Github</a>
      </Description>
    </div>
  </WelcomeCard>
);
