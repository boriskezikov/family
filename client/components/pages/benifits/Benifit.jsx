import React from 'react'
import PropTypes from 'prop-types'
import Roter from '../../base/Roter'

const Benifit = ({ title, createdAt, socialStatus, text, ministere, benifits }) => {
    return (
        <div className="benifit">
            <div className="__header">
                <div className="title">{title}</div>
            </div>
            <div className="__body">
                <div className="date">{`Дата вступления в силу: ${createdAt}`}</div>
                <div>{`Социальный статус подходящих людей: ${socialStatus
                    .join(', ')
                    .slice(0, -2)}`}</div>
                <div>{`Содержимое: ${text}`}</div>
                <div>{`Утверждено: ${ministere}`}</div>
                <div>{`Льгота: ${benifits}`}</div>
            </div>
            <div className="__footer">
                <Roter href="/">Оформить</Roter>
            </div>
        </div>
    )
}

Benifit.propTypes = {}

export default Benifit
