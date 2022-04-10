import { images } from "../../constants";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { useState } from "react";
import "./Navbar.scss";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.mylogo} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {["home", "about", "work", "skills", "contact"].map((c, i) => (
          <li key={`link-${c}`} className="app__flex p-text">
            <div />
            <a href={`#${c}`}>{c}</a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            {["home", "about", "work", "skills", "contact"].map((c, i) => (
              <ul>
                <li key={c} className="app__flex p-text">
                  <a href={`#${c}`} onClick={() => setToggle(false)}>
                    {c}
                  </a>
                </li>
              </ul>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
