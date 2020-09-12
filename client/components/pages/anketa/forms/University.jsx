import { useFormik } from 'formik'
import React from 'react'
import Button from '../../../base/Button'
import Input from '../fields/Input'
import Radio from '../fields/Radio'

const University = ({ onSubmit }) => {
    const formik = useFormik({
        initialValues: {
            isStudy: 'Нет',
            course: null,
            universityName: null,
        },
        onSubmit: (values) => {
            let nextForms = []

            onSubmit(values, nextForms)
        },
    })
    return (
        <form onSubmit={formik.handleSubmit}>
            <Radio
                id="isStudy"
                label="Учитесь ли Вы в Вузе"
                value={formik.values.isStudy}
                list={['Нет', 'Да', 'Закончил']}
                onChange={formik.handleChange}
            />
            {formik.values.isStudy !== 'Нет' && (
                <Radio
                    id="course"
                    label="Какой курс"
                    value={formik.values.course}
                    list={['1', '2', '3', '4', '5(Магистратура)', '6(Магистратура)']}
                    onChange={formik.handleChange}
                />
            )}
            {formik.values.isStudy !== 'Нет' && (
                <Input
                    id="universityName"
                    label="Название университета"
                    value={formik.values.universityName}
                    onChange={formik.handleChange}
                />
            )}
            <Button small>Далее</Button>
        </form>
    )
}

export default University
