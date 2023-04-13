import React from "react";
import { css } from "@emotion/css";

const LeftMenu = () => {
  return (
    <div
      className={css`
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        width: 200px;
        background-color: #f0f0f0;
        padding: 20px;
        box-sizing: border-box;
      `}
    >
      {/* Add your menu items here */}
      <h2>Menu</h2>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </div>
  );
};

export default LeftMenu;