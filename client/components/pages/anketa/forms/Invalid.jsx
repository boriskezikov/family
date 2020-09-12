import React from 'react'
import PropTypes from 'prop-types'
import Button from '../../../base/Button'
import Radio from '../fields/Radio'

const Invalid = ({}) => {
    const formik = useFormik({
        initialValues: {
            isInvalid: 'Нет',
            invalidLevel: null,
        },
        onSubmit: (values) => {
            onSubmit(values, ['MARIED'])
        },
    })
    return (
        <form onSubmit={formik.handleSubmit}>
            <Radio
                id="isInvalid"
                label="У Вас есть инвалидность?"
                value={formik.values.isInvalid}
                list={['Да', 'Нет']}
                onChange={formik.handleChange}
            />
            {formik.values.isInvalid && (
                <Radio
                    id="invalidLevel"
                    label="Степень инвалидности"
                    value={formik.values.invalidLevel}
                    list={['1', '2', '3', '4']}
                    onChange={formik.handleChange}
                />
            )}
            <Button small>Далее</Button>
        </form>
    )
}

Invalid.propTypes = {}

export default Invalid
