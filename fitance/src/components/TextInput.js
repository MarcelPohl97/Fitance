import React from 'react';

const TextInput = ({onChange, value, label, form_recognizer, placeholder}) => {
    return (
        <>
        <div className="flex flex-col items-start">
            <label htmlFor="age" className="text-[#008FFF] font-semibold ml-1">{label}</label>
            <input
                className="focus:outline-none p-2 border-[#008FFF] border-2 rounded-lg transition bg-gray-100 hover:bg-gray-200 focus:bg-white shadow-lg"
                id={form_recognizer}
                name={form_recognizer}
                type="text"
                onChange={onChange}
                value={value}
                placeholder={placeholder}
            />
        </div>
        </>
    )
}

export default TextInput;