import * as React from "react";
import { makeStyles } from "@fluentui/react-components";

const useStyles = makeStyles({
  root: {
    containerType: "inline-size",
  },
  element: {
    backgroundColor: "blue",
    "@container (width > 600px)": {
      backgroundColor: "red",
    },
  },
});

export const Component = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.element}>Hello World</div>
    </div>
  );
};
