"use client";

import { Link as ScrollLink } from "react-scroll";

const Links = [
  {
    name: "home",
  },
  {
    name: "about",
  },
  {
    name: "journey",
  },
  {
    name: "work",
  },
  {
    name: "contact",
  },
];

const Nav = ({ containerStyles, linkStyles, listStyles, spy }) => {
  return (
    <nav className={containerStyles}>
      <ul className={listStyles}>
        {Links.map((link, index) => (
          <ScrollLink
            key={index}
            activeClass="active"
            to={link.name}
            smooth={true}
            className={linkStyles}
            spy={spy}
            offset={-100}
          >
            {link.name}
          </ScrollLink>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
