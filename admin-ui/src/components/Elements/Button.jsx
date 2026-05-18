import React from 'react'

function Button(props) {
  const { children, type = "submit", variant = "primary"} = props;
  
  const baseClasses = "h-12 rounded-md text-sm w-full"
  const variantClasses = {
    primary: "bg-[#299d91] text-white hover:bg-[#238a7f]",
    secondary: "bg-[#f0f0f0] text-gray-700 hover:bg-[#e0e0e0]"
  };

  const finalClasses = `${baseClasses} ${variantClasses[variant] || variantClasses.primary}`; 
  return (
    <>
    <button
      className={finalClasses}
      type={type}
    >
      {children}
     </button>
    </>
  )
}

export default Button