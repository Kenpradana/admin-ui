import React from "react";

function Logo(props) {
  const { variant = "primary" } = props;

  const variantClasses = {
    primary: "text-[#299d91] text-4xl",
    secondary: "text-[#299d91] text-sm sm:text-2xl",
  };

  return (
    <>
      <div
        className={`flex justify-center font-poppins tracking-wide 
          ${variantClasses[variant] || variantClasses.primary}`}
      >
        <span className="font-bold">FINE</span>
        bank
        <span className="font-bold">.IO</span>
      </div>
    </>
  );
}

export default Logo;


