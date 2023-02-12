import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const navigations = links.map((link, index) => {
    return (
      <a key={index} href={`#${link}`}>
        {link}
      </a>
    );
  });
  return <nav>{navigations}</nav>;
}

export default NavBar;
