import React,  {useRef} from 'react'
import styled from 'styled-components'
import {getBackground} from '../helper/parser'

const Input = styled.div`
  padding: 10px 20px;
  width: 100%;
  margin: 10px 0;
  display: block;
  background-color: ${props => props.bgColor ? props.bgColor : "#eee"};
  border-radius: 10px;
  border: none;
  transition: all 200ms ease;

  &:focus {
    outline: none;
    box-shadow: 0px 0px 1px 2px rgba(65, 83, 184, 0.7);
  }

  ::-webkit-input-placeholder {
    color: rgba(136, 144, 151, 0.7);
    font-style: italic;
  }
  ::-moz-placeholder {
    color: rgba(136, 144, 151, 0.7);
    font-style: italic;
  }
  :-ms-input-placeholder {
    color: rgba(136, 144, 151, 0.7);
    font-style: italic;
  }
`

export default function ({onSubmit, onBackgroundChange,...props}) {
  const input = useRef()

  const onKeyDown = (e) => {
    // Ctrl Enter
    if (e.keyCode === 13 && e.metaKey) {
      onSubmit(input.current.innerHTML)
    }
  }

  const onPaste = (e) => {
    var pastedText = undefined
    if (window.clipboardData && window.clipboardData.getData) { // IE
      pastedText = window.clipboardData.getData('Text')
    } else if (e.clipboardData && e.clipboardData.getData) {
      pastedText = e.clipboardData.getData('text/html')
    }
    processChangeBackground(pastedText)
  }

  const processChangeBackground = (htmlText) => {
    setTimeout(() => {
      onBackgroundChange(getBackground(htmlText))
    }, 0);
  }
 
  return (
    <Input contentEditable {...props} ref={input} onKeyDown={onKeyDown} onPaste={onPaste} />
  )
}