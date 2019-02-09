import React from 'react';

function TextArea ({ callback, cols = 20, rows = 2, disabled = false, readOnly = false, placeholder='' }) {
    return (
        <textarea
            cols={cols}
            rows={rows}
            disabled={disabled}
            readOnly={readOnly}
            placeholder={placeholder}
            onChange={({ target : { value } }) => callback(value)}
        />
    );
}
export default TextArea;
