import React from 'react'
import PropTypes from 'prop-types'
import { useFormik } from 'formik'
import Radio from '../fields/Radio'
import Input from '../fields/Input'
import Button from '../../../base/Button'

const Work = ({ onSubmit }) => {
    const formik = useFormik({
        initialValues: {
            isWorker: 'Нет',
            salary: 0,
            expYear: 0,
        },
        onSubmit: (values) => {
            onSubmit(values, [])
        },
    })
    return (
        <form onSubmit={formik.handleSubmit}>
            <Radio
                id="isWorker"
                label="Вы работаете?"
                value={formik.values.isWorker}
                list={['Да', 'Нет']}
                onChange={formik.handleChange}
            />
            {formik.values.isWorker !== 'Нет' && (
                <Input
                    id="salary"
                    type="number"
                    label="Сколько Вы зарабатываете?"
                    value={formik.values.salary}
                    onChange={formik.handleChange}
                />
            )}
            {formik.values.isWorker !== 'Нет' && (
                <Input
                    id="expYear"
                    type="number"
                    label="Ваш опыт работы"
                    value={formik.values.expYear}
                    onChange={formik.handleChange}
                />
            )}
            <Button small>Далее</Button>
        </form>
    )
}

Work.propTypes = {}

export default Work
