import styled from "styled-components";

export default styled.div`
  display: flex;
  background-color: ${(props) =>
    props.bgColor ? props.bgColor : "rgb(255 255 255)"};
  border: 4px solid #4153b8;
  box-shadow: 0 10px 30px rgb(0 0 0 / 30%);
  border-radius: 15px;
  margin-bottom: 10px;
  margin-top: 5px;
  max-height: 50vh;
  overflow: hidden;
`;
