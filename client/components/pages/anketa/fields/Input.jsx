import React from 'react'
import PropTypes from 'prop-types'

const Input = ({ id, label, type, value, placeholder, onChange }) => {
    return (
        <label>
            {label}
            <input
                id={id}
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
            />
        </label>
    )
}

Input.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    placeholder: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}

Input.defaultProps = {
    type: 'text',
}

export default Input
