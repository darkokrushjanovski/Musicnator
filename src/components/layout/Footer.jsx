import React from "react";

function Footer() {
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;
  return <div>{date}</div>;
}

export default Footer;
