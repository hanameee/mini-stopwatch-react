import React from 'react';

function Button({ label, code, color, onClickHandler }) {
    return (
        <button
            className={`${color} rounded-full w-16 h-16 relative flex flex-col justify-center items-center cursor-pointer shadow-md`}
            onClick={onClickHandler}
        >
            <p id="lap-reset-btn-label" className="text-base">
                {label}
            </p>
            <p className="text-xs">{code}</p>
        </button>
    );
}

export default Button;
