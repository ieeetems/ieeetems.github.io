import React from "react";
import { Grid } from "@material-ui/core";
import { LinkedIn } from "@material-ui/icons";
import "../css/Board.css";

export default function BoardItem(props) {
  return (
    <Grid container className="boardItem">
      <Grid item xs={1} />
      <Grid item xs={10}>
        <div className="itemContainer">
          <div className="overlay">
            <a href={props.linkedInProfile}>
              <LinkedIn className="linkedInIcon" style={{ color: "white" }} />
            </a>
          </div>
          <img
            src={props.imageSrc}
            alt={"IEEE TEMS VIT - " + props.designation}
            className="boardImage"
          />
        </div>
        <div className="itemSubText">
          <div className="memberName">{props.name}</div>
          <div className="memberDesignation">{props.designation}</div>
        </div>
      </Grid>
      <Grid item xs={1} />
    </Grid>
  );
}
