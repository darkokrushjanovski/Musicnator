import React from "react";

function Footer() {
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;
  return (
    <div className="footer">
      <footer>
        <p className="footerText">
          Copyright &copy; {date} All rights reserved
        </p>
      </footer>
    </div>
  );
}

export default Footer;
