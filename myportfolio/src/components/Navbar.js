import { Link } from "react-router-dom";
import "./Navbar.css";
import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const [color, setColor] = useState(false);

  // scroll'da 100'den fazla aşağı inersek navbar'ın bg'si siyah olur
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  // scroll olayı her tetiklendiğinde changeColor fonksiyonunun çağrılmasını sağlar.
  window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/">
        <h1>PORTFOLYO</h1>
      </Link>

      {/* telefon boyutunda menüye tıklarsan aktif olup li'ler ekrana gelir */}
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/project">Project</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      {/* telefon boyutundayken menü'ye tıklarsan X, X'e tıklarsan menü iconu gelsin */}
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "#fff" }} />
        ) : (
          <FaBars size={20} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
