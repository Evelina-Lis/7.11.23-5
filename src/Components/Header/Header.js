import React from "react";
import headerData from "./headerData";

function Header() {
  return (
    <div>
      <div className="left-part"> я </div>
      <div className="right-part"> молодец </div>
      {headerData.map((item, index) => (
        <button key={index} href={item.link}>
          {item.name}
        </button>
      ))}
    </div>
  );
}

export default Header;
