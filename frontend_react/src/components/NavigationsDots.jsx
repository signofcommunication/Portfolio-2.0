import React from "react";

function NavigationsDots({ active }) {
  return (
    <div className="app__navigation">
      {["home", "about", "work", "skills", "contact"].map((c, i) => (
        <a
          href={`#${c}`}
          className="app__navigation-dot"
          key={i + c}
          style={active === c ? { backgroundColor: "#313bac" } : {}}
        />
      ))}
    </div>
  );
}

export default NavigationsDots;
