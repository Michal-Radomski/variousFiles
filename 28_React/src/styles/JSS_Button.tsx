import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  button: {
    backgroundColor: "gray",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",

    "&$primary": {
      backgroundColor: "blue",
    },

    "&:hover": {
      opacity: 0.8,
    },
  },
  primary: {},
});

const JSSButton: React.FC<{ primary?: boolean; label: string }> = ({ primary, label }): JSX.Element => {
  const classes = useStyles();

  return <button className={`${classes.button} ${primary ? classes.primary : ""}`}>{label}</button>;
};

export default JSSButton;
