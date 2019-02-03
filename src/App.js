import React, { useState, useRef } from 'react'

import {ChatContainer, Container} from './components/Elements'
import Input from './components/Input'
import Welcome from './components/Welcome'
import Chat from './components/Chat'

export default () => {
  const inputMessage = useRef(null)
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
  const [bgColor, setBgColor] = useState('#eee');

  const onSubmit = function(htmlValue) {
    let message = htmlValue
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

  return (
    <Container>
      <Welcome />
      <ChatContainer>
        <Chat messages={messages} />
        <Input 
          placeholder="Enter some note"
          onSubmit={onSubmit}
          onBackgroundChange={_onBackgroundChange}
          bgColor={bgColor}
        />
      </ChatContainer>
    </Container>
  )
}

