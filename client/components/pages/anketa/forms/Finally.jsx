import React from 'react'
import PropTypes from 'prop-types'
import Button from '../../../base/Button'
import Axios from 'axios'

const Finally = ({ form }) => {
    const Fetch = async () => {
        try {
            const res = await Axios.post('', { form: form })
        } catch (e) {}
    }
    return (
        <div className="finally">
            <div>Вы заполнили анкету!</div>
            <Button onClick={Fetch}>Посмотреть льготы</Button>
        </div>
    )
}

Finally.propTypes = {}

export default Finally
