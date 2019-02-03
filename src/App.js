import React, { useState } from 'react'

import {ChatContainer, Container, SubmitButton, SrOnly} from './components/Elements'
import Input from './components/Input'
import InputWrapper from './components/InputWrapper'
import Welcome from './components/Welcome'
import Chat from './components/Chat'

export default () => {
  const defaultMess = [
    {
      created: new Date(),
      message: 'I am Messnoter. Give note to me',
      createdBy: 'bot'
    },
    {
      created: new Date(),
      message: 'Message to test, Hello Boong. Long message with more text to testing layout',
      createdBy: 'me'
    },
  ]
  const [messages, setMessages]  = useState(defaultMess)
  const [bgColor, setBgColor] = useState(null)
  const [inputValue, setInputValue] = useState()

  const onSubmit = function() {
    let message = inputValue
    setMessages(
      [...messages, {
        created: new Date(), 
        message,
        createdBy: 'me',
        backgroundColor: bgColor
      }]
    )
  }

  const _onBackgroundChange = function(color) {
    console.log(color)
    setBgColor(color)
  }

  const _onInput = value => {
    setInputValue(value)
  }

  return (
    <Container>
      <Welcome />
      <ChatContainer>
        <Chat messages={messages} />
        <InputWrapper 
          bgColor={bgColor}
        >
          <Input 
            placeholder="Enter some note"
            onSubmit={onSubmit}
            onBackgroundChange={_onBackgroundChange}
            onInput={_onInput}
          />
          <SubmitButton onClick={onSubmit}>Send</SubmitButton>
        </InputWrapper>
      </ChatContainer>
    </Container>
  )
}

