import React from 'react';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyles = 'inline-flex items-center justify-center px-6 py-3 rounded-full font-medium transition-all duration-300 ease-in-out transform hover:-translate-y-0.5 hover:shadow-lg';
  
  const variants = {
    primary: 'bg-primary text-white hover:bg-primary-hover shadow-md',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
    white: 'bg-white text-primary hover:bg-gray-50 shadow-md',
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
