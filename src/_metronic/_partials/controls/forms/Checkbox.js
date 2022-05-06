import React from "react";

export function Checkbox({ children,value,name,onChange}) {
  return (
    <>
      <input type="checkbox" style={{ display: "none" }} />
      <label className="checkbox checkbox-lg checkbox-single">
        <input type="checkbox" 
   
   onChange={onChange}  
        value={value}
        name={name}
        />
        <span />
        {children}
      </label>
    </>
  );
}
