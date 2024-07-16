// Footer.js

import React from "react";
import "./App.css"; // Buat file Footer.css untuk styling footer
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { IoIosCopy } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <a
          href="https://solscan.io/account/So11111111111111111111111111111111111111112"
          target="_blank"
          style={{ textDecoration: "none", color: "white" }}
        >
          <p>CA: So11111111111111111111111111111111111111112</p>
        </a>
        <div className="social-icons">
          <a
            href="https://twitter.com/solympicsolana"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter />
          </a>
          <a
            href="https://telegram.me/solsolympic"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTelegramPlane />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
