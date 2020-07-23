import React from "react";
import UiKitButton from '../../systemUIKit/iconButton';
import "./taskman.css";

function Taskman(props) {
    return (
      <div className="taskMan">
        <UiKitButton icon="../public/logo512.png"></UiKitButton>
      </div>
    );
  }

export default Taskman;