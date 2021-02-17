import { func } from "prop-types";
import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <footer>
        <p className="openSource">
          Coded open sourced by <a href="https://github.com/KayPi-Code/React-Project.git">Katrin Parizek</a>
        </p>
        <p id="picture">
          <a href="https://unsplash.com/photos/GhrqMkA4cVA?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink">
            picture by Max Kleinen on unsplash
          </a>
        </p>
      </footer>
    </div>
  );
}
