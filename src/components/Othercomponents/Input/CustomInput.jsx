import "./CustomInput.scss";

import React, { useState } from "react";

interface customInputProps {
  title: string;
  width: string;
  height: string;
  left?: string;
  background? : string;
  labelbackground? : string;
  children?: React.ReactNode;
}


const CustomInput = ({ title, width, height, background, labelbackground, left, children }: customInputProps) => {
  const inputStyle: React.CSSProperties = {
    width: width || 'auto',
    height: height || 'auto',
    left: left || '-150px'
  };

  const textInputStyle: React.CSSProperties = {
    background: background || '#ffffff'
  };

  const labelStyle: React.CSSProperties = {
    left: left || '-150px',
    background: labelbackground || '#ffffff',
    width: 'max-content'

  };

  
  return (
    <>
      <div className="input-box" style={inputStyle}>
        <label htmlFor="inputField" className="inputlabel" style={labelStyle}>
          {title}
        </label>
        <input type="text" id="inputField" className="textinput" style={textInputStyle}/>
        <div className="children">
          {children}
        </div>
      </div>
    </>
  );
};

export default CustomInput;
