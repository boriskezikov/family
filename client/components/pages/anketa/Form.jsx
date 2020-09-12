import { useFormik } from 'formik'
import React from 'react'
import Button from '../../base/Button'
import Input from './fields/Input'
import Radio from './fields/Radio'

const Form = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            birthday: '',
            sex: null,
            socialStatus: null,
        },
        onSubmit: (values) => {
            alert(JSON.stringify(values))
        },
    })
    return (
        <form onSubmit={formik.onSubmit}>
            <Input label="Почта" value={formik.values.email} onChange={formik.handleChange} />
            <Radio
                id="sex"
                label="Пол"
                value={formik.values.sex}
                list={['Мужской', 'Женский']}
                onChange={formik.handleChange}
            />
            <button type="submit">send</button>
        </form>
    )
}

export default Form
