import React from "react";
import { BsLinkedin, BsInstagram, BsGithub } from "react-icons/bs";

function SocialMedia() {
  return (
    <div className="app__social">
      <a
        href="https://linkedin.com/in/jeriko-seo-a850a5214"
        target="_blank"
        rel="noreferrer"
      >
        <div>
          <BsLinkedin />
        </div>
      </a>
      <a href="https://github.com/jhvonsky" target="_blank" rel="noreferrer">
        <div>
          <BsGithub />
        </div>
      </a>
      <a href="https://instagram.com/jhvonsky" target="_blank" rel="noreferrer">
        <div>
          <BsInstagram />
        </div>
      </a>
    </div>
  );
}

export default SocialMedia;
