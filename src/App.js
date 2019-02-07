import React, { useState, useContext } from 'react'

import {ChatContainer, Container, SubmitButton} from './components/Elements'
import Input from './components/Input'
import InputWrapper from './components/InputWrapper'
import Welcome from './components/Welcome'
import Chat from './components/Chat'
import {MessnoteContext} from './context/MessnoteContext'

export default () => {
  const [bgColor, setBgColor]       = useState(null)
  const [inputValue, setInputValue] = useState()
  const {
    messnotes,
    addMessnote,
    enabledMessnoteInput
  } = useContext(MessnoteContext);

  const onSubmit = function() {
    let message = inputValue
    addMessnote({
      created: new Date(), 
      message,
      createdBy: 'me',
      backgroundColor: bgColor || '#4153B8'
    })
  }

  const _onFoundBackgroundColor = function(color) {
    setBgColor(color)
  }
  const _onInput = value => {
    setInputValue(value)
  }
  const _bubbleClick = linktify => {
    document.location = linktify.url;
  }

  return (
    <Container>
      <Welcome />
      <ChatContainer>
        <Chat messages={messnotes} bubbleClick={_bubbleClick} />
        {enabledMessnoteInput && <InputWrapper 
          bgColor={bgColor}
        >
          <Input 
            placeholder="Enter some note"
            onSubmit={onSubmit}
            onFoundBackgroundColor={_onFoundBackgroundColor}
            onInput={_onInput}
          />
          <SubmitButton onClick={onSubmit}>Send</SubmitButton>
        </InputWrapper>}
      </ChatContainer>
    </Container>
  )
}
