import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1400px;
  margin: auto;
  height: 100vh;
`;

export const ChatContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  max-width: 1200px;
  width: 100%;
  background: #fbfbfd;
  box-shadow: 0 15px 44px 0 rgba(64, 68, 90, 0.2);
  border-radius: 30px;
  justify-content: space-between;
  padding: 10px 20px;
  margin: 20px;

  @media only screen and (max-width: 900px) {
    flex-direction: column;
    padding: 20px;
    margin: 20px;
  }

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    padding: 10px;
    margin: 10px;
  }
`;

export const WelcomeCard = styled.div`
  max-width: 300px;
  min-width: 200px;
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media only screen and (max-width: 900px) {
    display: none;
    text-align: center;
    max-width: 100%;
    margin-top: 20px;
  }
`;

export const Mobile = styled.div`
  min-width: 320px;
  max-width: 375px;
  height: 500px;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  padding: 50px 20px 20px;
  background: #fff;
  border-radius: 50px;
  z-index: 3;
  position: relative;
  box-shadow: 0 32px 44px 0 rgba(64, 68, 90, 0.2);

  @media only screen and (max-width: 900px) {
    padding-top: 30px;
    margin: auto;
  }
`;

export const MobileBg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 150%;
  z-index: 0;
  transform: translateX(-25%);

  @media only screen and (max-width: 900px) {
    left: 50%;
    width: auto;
    max-height: 500px;
    transform: translateX(-50%);
  }

  @media only screen and (max-width: 600px) {
    left: 0;
    transform: translateX(-10%);
    width: 120%;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-flow: wrap;
`;

export const SrOnly = styled.div`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
`;

export const Button = styled.button`
  color: #889097;
  line-height: 1.5;
  margin: 0;
  border: none;
  appearance: none;
  padding: 0;
  text-decoration: underline;
  cursor: pointer;

  &:hover,
  &:focus {
    color: #222;
    outline: none;
  }
`;

export const SubmitButton = styled.button`
  padding: 10px 14px;
  color: rgba(65, 83, 184, 1);
  border: none;
  margin: 0;
  font-size: 14px;
  font-weight: bold;
  background-color: transparent;
  cursor: pointer;
  outline: none;
`;

export const Title = styled.h1`
  font-weight: 800;
  color: ${props => props.color};
  margin: 5px 0;
`;

export const SubTitle = styled.h3`
  font-weight: 400;
  color: ${props => props.color};
  margin: 0;
`;

export const Description = styled.h4`
  font-weight: 400;
  color: ${props => props.color};
  margin: 10px 0;
  color: #555;
  line-height: 1.35;
`;
