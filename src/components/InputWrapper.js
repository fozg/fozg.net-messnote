import styled from "styled-components";

export default styled.div`
  display: flex;
  background-color: ${props => (props.bgColor ? props.bgColor : "#eee")};
  border-radius: 10px;
  margin-bottom: 10px;
  margin-top: 5px;
  max-height: 50vh;
  overflow: hidden;
`;
