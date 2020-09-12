import React from 'react'
import { useFormik } from 'formik'
import Input from '../fields/Input'
import Radio from '../fields/Radio'
import Button from '../../../base/Button'
import DatePicker from 'react-datepicker'

const Start = ({ onSubmit }) => {
    const formik = useFormik({
        initialValues: {
            birthday: '',
            sex: null,
            socialStatus: null,
        },
        onSubmit: (values) => {
            let nextForms = []
            if (new Date().getFullYear() - new Date(values.birthday).getFullYear() > 19) {
                nextForms = ['WAR']
            }
            switch (formik.values.socialStatus) {
                case 'Дошкольник':
                    break
                case 'Школьник':
                    nextForms = ['SCHOOL', 'FAMILY', ...nextForms]
                    break
                case 'Закончил школу':
                    nextForms = ['SCHOOL_END', 'FAMILY', ...nextForms]
                    break
                case 'Студент':
                    nextForms = ['UNIVERSITY', 'FAMILY', 'MARIED', 'WORKER', ...nextForms]
                    break
                case 'Безработный':
                    nextForms = ['UNIVERSITY', 'FAMILY', 'MARIED', 'WORKER', ...nextForms]
                    break
                case 'Работающий':
                    nextForms = ['MARIED', 'WORKER', ...nextForms]
                    break
                case 'Пенсионер':
                    nextForms = ['FAMILY', 'MARIED', ...nextForms]
                    break
                default:
                    break
            }

            onSubmit(values, nextForms)
        },
    })
    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="birthday">{'День рождения'}</label>
            <DatePicker
                id="birthday"
                selected={formik.values.birthday}
                onChange={(e) => {
                    formik.setValues({ ...formik.values, birthday: e })
                }}
            />
            <Radio
                id="sex"
                label="Пол"
                value={formik.values.sex}
                list={['Мужской', 'Женский']}
                onChange={formik.handleChange}
            />
            <Radio
                id="socialStatus"
                label="Род деятельности"
                value={formik.values.socialStatus}
                list={[
                    'Дошкольник',
                    'Школьник',
                    'Закончил школу',
                    'Студент',
                    'Безработный',
                    'Работающий',
                    'Пенсионер',
                ]}
                onChange={formik.handleChange}
            />
            <Button small>Далее</Button>
        </form>
    )
}

export default Start
