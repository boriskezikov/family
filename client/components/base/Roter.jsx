import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import classnames from 'classnames'

const Roter = ({ outline, large, medium, small, disabled, href, children }) => {
    return (
        <Link href={href}>
            <a
                className={classnames('button', {
                    large: large,
                    medium: medium,
                    small: small,
                    outline: outline,
                    disabled: disabled,
                })}
            >
                {children}
            </a>
        </Link>
    )
}

Roter.propTypes = {
    children: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
}

export default Roter
