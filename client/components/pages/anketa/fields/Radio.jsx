import React from 'react'
import PropTypes from 'prop-types'

const Radio = ({ id, label, value, list, onChange }) => {
    return (
        <div className="radio-box">
            {label}
            {list.map((val) => (
                <>
                    <label>
                        <input
                            type="radio"
                            id={val}
                            name={id}
                            value={val}
                            checked={value === val}
                            onChange={onChange}
                        />
                        {val}
                    </label>
                </>
            ))}
        </div>
    )
}

Radio.propTypes = {}

export default Radio
