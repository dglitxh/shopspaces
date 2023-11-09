import React from "react";
import { Typography } from "@mui/material";

export default function RandCol(props: any) {
  let title: string = props.title;
  let arr = title.split(" ");
  let r = Math.floor(Math.random() * arr.length);
  const partA = arr.slice(0, r).join(" ") + " ";
  const partB = " " + arr.slice(r + 1).join(" ");
  let colored = arr[r];
  return (
    <Typography fontSize={props.size || "110%"} component="span">
      {partA}
      <Typography color={"primary"} component="span" fontSize={"100%"}>
        {colored}
      </Typography>
      {partB}
    </Typography>
  );
}
