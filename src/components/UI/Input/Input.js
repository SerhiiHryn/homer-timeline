import React from 'react';
import './Input.scss';

const Input = ({ label, value, name, id, type, placeholder, onChange }) => {
  return (
    <div className="input">
      { label ? <label className="input__label" htmlFor={id}>{label}</label> : null}
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange} />
    </div>
  );
};

export default Input;
