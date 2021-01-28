import { func } from "prop-types";
import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <footer>
        <p id="picture">
          <a href="https://unsplash.com/photos/GhrqMkA4cVA?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink">
            Foto by Max Kleinen on unsplash
          </a>
        </p>
        <p id="video">
          Free Stock video by <a href="http://www.videezy.com">Videezy.com</a>
        </p>
      </footer>
    </div>
  );
}
