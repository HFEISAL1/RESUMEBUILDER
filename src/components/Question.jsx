import React from 'react'
import { Button, TextField } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles";
import AppContext from "../AppContext";
const useStyles = makeStyles((theme) => ({
  buttonContainer: {
    display: "block",
    marginTop: "1rem",
  },
  button: {
    background: "white",
  },
}));

function Question() {
  const classes = useStyles();
  const value = useContext(AppContext);
  let { questionAnswer } = value.state;
  let { handleChangeInput, nextQuestion } = value.function;
  return (
    <div>Question</div>
  )
}

export default Question