import { useFormik } from 'formik'
import React from 'react'
import Button from '../../../base/Button'
import Input from '../fields/Input'
import Radio from '../fields/Radio'

const War = ({ onSubmit }) => {
    const formik = useFormik({
        initialValues: {
            isWar: 'Нет',
            war: null,
        },
        onSubmit: (values) => {
            let nextForms = []

            onSubmit(values, nextForms)
        },
    })
    return (
        <form onSubmit={formik.handleSubmit}>
            <Radio
                id="isWar"
                label="Вы участвовали в боевых действиях?"
                value={formik.values.isWar}
                list={['Нет', 'Да']}
                onChange={formik.handleChange}
            />
            {formik.values.isWar !== 'Нет' && (
                <Radio
                    id="war"
                    label="В каких боевых действия Вы участвовали?"
                    value={formik.values.course}
                    list={[
                        'Ветеран боевых действий, направлявшийся на работу в Афганистан в период с декабря 1979 года по декабрь 1989 года ',
                        'Ветеран боевых действий, обслуживавший воинские части в период ведения боевых действий',
                        'Ветеран боевых действий, принимавший участие в боевых действиях при исполнении служебных обязанностей ',
                    ]}
                    onChange={formik.handleChange}
                />
            )}
            <Button small>Далее</Button>
        </form>
    )
}

export default War
