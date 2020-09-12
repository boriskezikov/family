import React from 'react'
import PropTypes from 'prop-types'
import { useFormik } from 'formik'
import Radio from '../fields/Radio'
import Button from '../../../base/Button'

const Family = ({ onSubmit }) => {
    const formik = useFormik({
        initialValues: {
            fullFamily: null,
            liveWith: null,
        },
        onSubmit: (values) => {
            onSubmit(values, [])
        },
    })
    return (
        <form onSubmit={formik.handleSubmit}>
            <Radio
                id="fullFamily"
                label="У вас полная семья?"
                value={formik.values.fullFamily}
                list={['Полная', 'Нет одного родителя', 'Нет родителей']}
                onChange={formik.handleChange}
            />
            {formik.values.fullFamily !== 'Нет родителей' && (
                <Radio
                    id="liveWith"
                    label="Вы живете с родителями/родителем?"
                    value={formik.values.liveWith}
                    list={['Да', 'Нет']}
                    onChange={formik.handleChange}
                />
            )}
            <Button small>Далее</Button>
        </form>
    )
}

Family.propTypes = {}

export default Family
