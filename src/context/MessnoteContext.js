import React, { useState, useEffect } from "react";
import Auth from "../auth";
import MessnoteApi from "../api/messnote";
import consts from "../consts";

export const MessnoteContext = React.createContext();

export const MessnoteState = ({ children }) => {
  const [enabledMessnoteInput, setEnabledMessnoteInput] = useState(false);
  const [messnotes, setMessnotes] = useState([]);

  const addMessnote = ({ body, backgroundColor }) => {
    new MessnoteApi().add_messnote(body, backgroundColor).then((response) => {
      appendMessnotes(response);
    });
  };

  const appendMessnotes = (newMessnotes) => {
    setMessnotes((prevMessnotes) => prevMessnotes.concat(newMessnotes));
  };

  useEffect(() => {
    let auth = Auth.isAuthen();
    if (auth) {
      setEnabledMessnoteInput(true);
      setTimeout(() => {
        appendMessnotes({
          created: new Date(),
          body: "Welcome back @" + auth.username,
          createdBy: "bot",
        });
      }, 500);
    } else {
      appendMessnotes([
        {
          created: new Date(),
          body: "You need to login first",
          createdBy: "bot",
        },
        {
          created: new Date(),
          body: "Click me to login",
          createdBy: "bot",
          backgroundColor: "#4caf50",
          textColor: "#fff",
          linktify: { url: consts.AUTHEN_URL },
        },
      ]);
    }
  }, enabledMessnoteInput);

  useEffect(() => {
    new MessnoteApi()
      .get_all_messnote()
      .then((response) => {
        if (response.length === 0) {
          appendMessnotes({
            created: new Date(),
            body: "I am Messnoter. Write me some note ☺🙂",
            createdBy: "bot",
          });
        } else {
          appendMessnotes(response);
        }
      })
      .catch(() => {
        // alert("Forbiden");
      });
  }, false);

  return (
    <MessnoteContext.Provider
      value={{ messnotes, addMessnote, enabledMessnoteInput }}
    >
      {children}
    </MessnoteContext.Provider>
  );
};
