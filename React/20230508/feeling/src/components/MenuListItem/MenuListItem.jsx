import React from "react";
import "./MenuListItem.css";

export default function MenuListItem(props) {
  const onItemclick = () => {
    props.onClick(props.mood);
  };

  const getBackgroundColor = () => {
    if (props.isSelectd) {
      return "skyblue";
    }
  };
  return (
    <li>
      <button
        className="btn-item"
        onClick={onItemclick}
        style={{ backgroundColor: getBackgroundColor() }}
      >
        기분이 : {props.mood}
      </button>
    </li>
  );
}
