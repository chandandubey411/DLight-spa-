import React from 'react';

const Input = ({ type = 'text', className = '', as = 'input', options = [], ...props }) => {
  const baseStyles = 'w-full px-5 py-4 rounded-xl border border-gray-100 bg-white focus:outline-none focus:ring-4 focus:ring-primary/20 focus:border-primary transition-all duration-300 text-gray-700 placeholder-gray-400 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] hover:shadow-[0_4px_15px_-3px_rgba(6,81,237,0.15)]';
  
  if (as === 'textarea') {
    return (
      <textarea 
        className={`${baseStyles} resize-none min-h-[150px] ${className}`}
        {...props}
      />
    );
  }

  if (as === 'select') {
    return (
      <div className="relative w-full">
        <select className={`${baseStyles} appearance-none pr-10 cursor-pointer ${className}`} {...props}>
          {options.map((opt, i) => (
            <option key={i} value={opt.value}>{opt.label}</option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
          </svg>
        </div>
      </div>
    );
  }

  return (
    <input 
      type={type}
      className={`${baseStyles} ${className}`}
      {...props}
    />
  );
};

export default Input;
