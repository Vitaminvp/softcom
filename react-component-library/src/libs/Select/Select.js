import React from 'react';
import uniqId from 'uniqid';

function Select ({ values, callback, disabled = false, readonly = false, selected }) {
    return (
        <select
            disabled={disabled}
            readOnly={readonly}
            onChange={({ target : { value } }) => callback(value)}
        >
            {values.map(([value, text]) => <option selected={selected === value} value={value} key={uniqId()} >{text}</option>)}
        </select>
    );
}

export default Select;
