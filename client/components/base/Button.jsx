import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Button = ({ outline, large, medium, small, disabled, onClick, children }) => {
    return (
        <button
            className={classnames('button', {
                large: large,
                medium: medium,
                small: small,
                outline: outline,
                disabled: disabled,
            })}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

Button.propTypes = {
    children: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
}

export default Button
