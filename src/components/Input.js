import React,  {useRef} from 'react'
import { Scrollbars } from 'react-custom-scrollbars'
import styled from 'styled-components'
import {getBackground} from '../helper/parser'

const Input = styled.div`
  padding: 10px;
  width: 100%;
  display: block;
  border-radius: 10px;

  border: none;
  // transition: all 200ms ease;

  &:focus {
    outline: none;
    // box-shadow: 0px 0px 1px 2px rgba(65, 83, 184, 0.7);
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

export default function ({onSubmit, onBackgroundChange, value, onInput, ...props}) {
  const input = useRef()

  const onKeyDown = (e) => {
    // Ctrl Enter
    if (e.keyCode === 13 && e.metaKey) {
      onSubmit(input.current.innerHTML)
      input.current.innerHTML = ""
      setTimeout(() => {
        onBackgroundChange(getBackground(null))
      }, 0);
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

  const _onInput = (e) => {
    onInput(e.target.innerHTML)
  }
 
  return (
    <Scrollbars autoHeight autoHeightMax={400} autoHeightMin={0}
    thumbMinSize={30}
    universal={true}>
      <Input contentEditable {...props} ref={input} onKeyDown={onKeyDown} onPaste={onPaste} onInput={_onInput}></Input>
    </Scrollbars>
  )
}