import React from "react";

const Program = ({ img, header, info, para }) => {
  return (
    <div className="profile">
      <img src={img} alt=""></img>
      <div className="cap">
        <h4>{header}</h4>
        <p className="inf">{info}</p>
        <p className="gr">{para}</p>
      </div>
    </div>
  );
};

export default Program;
