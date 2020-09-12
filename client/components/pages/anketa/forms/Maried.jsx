import React from 'react'
import PropTypes from 'prop-types'
import { useFormik } from 'formik'
import Input from '../fields/Input'
import Radio from '../fields/Radio'
import Button from '../../../base/Button'

const Maried = ({ onSubmit }) => {
    const formik = useFormik({
        initialValues: {
            maried: 'Нет',
            haveChildren: 'Нет',
            countChildren: 0,
            agesChildren: [],
        },
        onSubmit: (values) => {
            onSubmit(values, [])
        },
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            <Radio
                id="maried"
                label="Вы состоите в браке?"
                value={formik.values.maried}
                list={['Да', 'Нет']}
                onChange={formik.handleChange}
            />
            <Radio
                id="haveChildren"
                label="У Вас есть дети?"
                value={formik.values.haveChildren}
                list={['Да', 'Нет']}
                onChange={formik.handleChange}
            />
            {formik.values.haveChildren !== 'Нет' && (
                <Input
                    type="number"
                    id="countChildren"
                    label="Сколько у вас детей?"
                    value={formik.values.countChildren}
                    onChange={formik.handleChange}
                />
            )}
            {formik.values.haveChildren !== 'Нет' && (
                <Input
                    type="number"
                    id="countChildren"
                    label="Сколько у вас детей?"
                    value={formik.values.countChildren}
                    onChange={formik.handleChange}
                />
            )}
            <Button small>Далее</Button>
        </form>
    )
}

Maried.propTypes = {}

export default Maried
