import React, { useState } from 'react'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa6';

const Input = ({ value, onChange, placeholder, label, type }) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <label className='text-[13px]' style={{ color: 'var(--text-1)' }}>{label}</label>
      <div className='w-full flex justify-between gap-3 text-sm rounded px-4 py-3 mb-4 mt-3 border' style={{ backgroundColor: 'rgba(255,255,255,0.04)', color: 'var(--text-0)', borderColor: 'var(--card-ring)' }}>
        <input
          type={type === 'password' ? (showPassword ? 'text' : 'password') : type}
          placeholder={placeholder}
          className="w-full bg-transparent outline-none focus:outline-none dark-input"
          style={{ caretColor: '#60a5fa', color: 'var(--text-0)' }}
          value={value}
          onChange={onChange}
        />
        {type === "password" && (
          showPassword ? (
            <FaRegEye
              size={22}
              className='cursor-pointer'
              style={{ color: '#60a5fa' }}
              onClick={toggleShowPassword}
            />
          ) : (
            <FaRegEyeSlash
              size={22}
              className='cursor-pointer'
              style={{ color: 'var(--text-1)' }}
              onClick={toggleShowPassword}
            />
          )
        )}
      </div>
    </div>
  )
}

export default Input
