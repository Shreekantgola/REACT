import React from "react";

const Footer = () => {
  const Year = new Date().getFullYear()
  return (
    <>
      <footer className="ftr text-start">
        All &copy; Copyright Reserved in <h5 className="SiteN mx-1 ">Don't move</h5> | {(Year)}
      </footer>
    </>
  );
};

export default Footer;
