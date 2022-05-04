import React from "react";

export function Checkbox({ children,value,name,isSelected}) {
  return (
    <>
      <input type="checkbox" style={{ display: "none" }} />
      <label className="checkbox checkbox-lg checkbox-single">
        <input type="checkbox" 
        checked={isSelected} 
        // onChange={onChange} name={name} 
        value={value}
        name={name}
        />
        <span />
        {children}
      </label>
    </>
  );
}
