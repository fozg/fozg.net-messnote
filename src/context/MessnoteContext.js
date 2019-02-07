
import React, { useState, useEffect } from 'react'
import Auth from '../auth'

export const MessnoteContext = React.createContext()

export const MessnoteState = ({ children }) => {
  const [enabledMessnoteInput, setEnabledMessnoteInput] = useState(false)
  const [messnotes, setMessnotes] = useState([
    {
      created: new Date(),
      message: 'I am Messnoter. Give note to me',
      createdBy: 'bot'
    },
  ])

  const addMessnote = (messnote) => {
    setMessnotes(messnotes.concat(messnote))
  }

  useEffect(() => {
    let authedUser = Auth.isAuthen()
    if (authedUser) {
      setEnabledMessnoteInput(true)
      addMessnote({
        created: new Date(),
        message: 'Welcome back @' + authedUser.username,
        createdBy: 'bot',
      },)
    } else {
      addMessnote([
        {
          created: new Date(),
          message: 'You need to login first',
          createdBy: 'bot',
        },
        {
          created: new Date(),
          message: 'Click me to login',
          createdBy: 'bot',
          backgroundColor: '#4caf50',
          textColor: '#fff',
          linktify: {url: 'https://accounts.fozg.net/signin'}
        },
      ])
    }
  }, messnotes.length)

  return (
    <MessnoteContext.Provider value={{ messnotes, addMessnote, enabledMessnoteInput }}>
      {children}
    </MessnoteContext.Provider>
  )
}