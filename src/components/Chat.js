import React, { Fragment, useRef, useEffect } from "react";
import { Scrollbars } from "react-custom-scrollbars";
import styled from "styled-components";
import { SrOnly } from "./Elements";
import { format } from "date-fns";

const Bubble = styled.div`
  min-height: 20px;
  padding: 0.5em 1em;
  margin-bottom: 4px;
  align-self: ${props => (props.primary ? "flex-end" : "flex-start")};
  background: ${props =>
    props.backgroundColor
      ? props.backgroundColor
      : props.primary
      ? "#4153B8"
      : "white"};
  color: ${props =>
    props.textColor ? props.textColor : props.primary ? "white" : "#54556C"};
  border-radius: 20px;
  box-shadow: 0 2px 4px 0 rgba(210, 210, 210, 0.5);
  cursor: ${props => (props.isLinkify ? "pointer" : "default")};

  img {
    @media only screen and (min-width: 900px) {
      max-width: 800px !important;
    }
  }
`;

// const ButtonsContainer = styled.div`
//   display: flex;
//   flex-flow: wrap;
//   justify-content: flex-end;
// `

const Speaking = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: ${props => (props.justifyEnd ? "flex-start" : "flex-end")};
  width: 100%;
`;

const BubbleWrapper = styled.div``;

const DateWrapper = styled.div`
  font-size: 10px;
  color: #aeb8c0;
  margin-bottom: 6px;
  padding: 0 4px;
  text-align: ${props => (props.textRight ? "right" : "left")};
`;

const List = styled.ul`
  padding-left: 0;
  margin: 0;
  flex: 1;
`;

const Chat = ({ messages, bubbleClick }) => {
  const scrollbar = useRef();

  useEffect(() => {
    scrollbar.current.scrollToBottom();
  }, [messages]);

  return (
    <List>
      <Scrollbars ref={scrollbar} autoHide>
        <List aria-label="Conversation messages">
          {messages.map(
            (
              {
                created,
                body,
                createdBy,
                backgroundColor,
                textColor,
                linktify // {url}
              },
              i
            ) => (
              <Fragment key={i}>
                <Speaking justifyEnd={createdBy === "bot"}>
                  <BubbleWrapper>
                    <Bubble
                      primary={createdBy !== "bot"}
                      textColor={textColor}
                      dangerouslySetInnerHTML={{ __html: body }}
                      backgroundColor={backgroundColor}
                      isLinkify={linktify !== undefined}
                      onClick={linktify && (() => bubbleClick(linktify))}
                    />
                    <DateWrapper textRight>
                      <SrOnly>Sent at</SrOnly>{" "}
                      {format(created, "MMM DD, hh:mm")}
                    </DateWrapper>
                  </BubbleWrapper>
                </Speaking>
              </Fragment>
            )
          )}
        </List>
      </Scrollbars>
    </List>
  );
};

export default Chat;
