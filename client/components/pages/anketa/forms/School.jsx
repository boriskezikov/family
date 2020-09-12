import React from 'react'
import PropTypes from 'prop-types'
import Button from '../../../base/Button'
import Radio from '../fields/Radio'

const School = (props) => {
    return (
        <form onSubmit={formik.handleSubmit}>
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

School.propTypes = {}

export default School
